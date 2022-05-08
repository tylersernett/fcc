function App() {
    const defaultBreak = 5;
    const defaultSession = 25;

    const [breakLength, setBreakLength] = React.useState(defaultBreak);
    const [sessionLength, setSessionLength] = React.useState(defaultSession);
    const [timeLeft, setTimeLeft] = React.useState(sessionLength * 60);
    const [timerOn, setTimerOn] = React.useState(false);
    const breakRef = React.useRef(false); //prefer Ref rather than State here-- 
    //Ref does not render at each value change. And we can set it without calling a 'set' ⇨ breakRef.current = ___

    React.useEffect(() => {
        console.table(breakLength, sessionLength, timeLeft, timerOn, breakRef.current);
    })

    const formatTime = (time) => {
        let min = Math.floor(time / 60);
        let sec = time % 60;
        return (
            ((min < 10) ? ("0" + min) : min)
            + ':' +
            ((sec < 10) ? ('0' + sec) : sec)
        );
    }

    //change break & session times, but stay between 1 & 60 inclusive
    const changeLength = (func, amount) => {
        func((prev) => {
            if ((prev + amount >= 1) && (prev + amount <= 60)) {
                //update session length time if the timer isn't active
                if (func === setSessionLength) {
                    if (!timerOn) {
                        setTimeLeft((sessionLength + amount) * 60);
                    }
                }
                return prev + amount
            } else {
                return prev
            }
        })
    }

    //reset everything to defaults
    const resetLengths = () => {
        setBreakLength(defaultBreak);
        setSessionLength(defaultSession);
        setTimeLeft(defaultSession * 60);
        setTimerOn(false);
        breakRef.current = false;
        beep.pause();
        beep.currentTime = 0;
        clearInterval(localStorage.getItem('int-id'));
    }

    const playSound = () => {
        const beep = document.getElementById('beep')
        beep.currentTime = 0; //allows for re-trigger
        beep.play();
    }

    const controlTime = () => {
        let second = 1000;
        let date = new Date().getTime();
        let nextDate = date + second;
        //on first activation, create new interval
        if (!timerOn) {
            let interval = setInterval(() => {
                date = new Date().getTime();
                if (date > nextDate) {
                    setTimeLeft((prev) => {
                        if (prev <= 0) {
                            playSound();
                            if (!breakRef.current) {
                                breakRef.current = true;
                                return breakLength * 60;
                            } else {
                                breakRef.current = false;
                                return sessionLength * 60;
                            }
                        }
                        return prev - 1;
                    })
                    nextDate += second;
                }
            }, 100);

            //store ID for pausing purposes
            localStorage.clear();
            localStorage.setItem('int-id', interval);
        } else {
            //clear the interval out if we just paused
            clearInterval(localStorage.getItem('int-id'));
        }
        setTimerOn(prev => !prev);
    }

    return (
        <div className="container  rounded text-center" >
            <div className='pb-5 '><span className = 'display-6'>Pomodoro Timer </span><i className="h4 fa-solid fa-clock"></i></div>
            
            <div className="row mb-sm-4 ">
                <div className='col-sm-5 shadow-sm  p-3'>
                    <div id='break-label'><h4 className="rect h2 fw-light">Break Length</h4>
                        <button id="break-decrement" className='btn btn-secondary' onClick={() => changeLength(setBreakLength, -1)}><i class="fa-solid fa-minus"></i></button>
                        <span id="break-length">  {breakLength}  </span>
                        <button id="break-increment" className='btn btn-secondary' onClick={() => changeLength(setBreakLength, 1)}><i class="fa-solid fa-plus"></i></button>
                    </div>
                </div>

                <div className='col-2 '></div>
                
                <div className='col-sm-5 shadow-sm p-3'>
                    <div id='session-label'><h4 className="rect h2 fw-light">Session Length</h4>
                        <button id="session-decrement" className='btn btn-secondary' onClick={() => changeLength(setSessionLength, -1)}><i class="fa-solid fa-minus"></i></button>
                        <span id="session-length">  {sessionLength}  </span>
                        <button id="session-increment" className='btn btn-secondary btn-square-md' onClick={() => changeLength(setSessionLength, 1)}><i class="fa-solid fa-plus"></i></button>
                    </div>
                </div>
            </div>
            
            <div className='row'>
                <div className='col '></div>
                <div className='col-sm-5 shadow-sm p-3' ><h4 className="rect h2 fw-light" id='timer-label'>{breakRef.current ? 'Break Time' : 'Session Time'}</h4>
                    <button id="start_stop" className='btn btn-secondary btn-square-md' onClick={controlTime}>{!timerOn ? <i className="fa-solid fa-play"></i> : <i className="fa-solid fa-pause"></i>}</button>
                    <span id="time-left"> {formatTime(timeLeft)} </span>
                    <button id="reset" className='btn btn-secondary btn-square-md' onClick={resetLengths}><i class="fa-solid fa-arrows-rotate"></i></button>
                    <audio className="clip" src='./beepsound.wav' id='beep'></audio>
                </div>
                <div className='col'></div>
            </div>

        </div>
    )
}
ReactDOM.render(<App />, document.getElementById('app'))