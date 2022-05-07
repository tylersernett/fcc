function App() {
    const defaultBreak = 5
    const defaultSession = 25
    
    const [breakLength, setBreakLength] = React.useState(defaultBreak);
    const [sessionLength, setSessionLength] = React.useState(defaultSession);
    const [timeLeft, setTimeLeft] = React.useState(sessionLength * 60);
    const [timerOn, setTimerOn] = React.useState(false)

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
        func( (prev) => 
            ((prev + amount >= 1) && (prev+amount <=60)) ? prev + amount : prev
        )
        if (func === setSessionLength) {
            if (!timerOn) {
                setTimeLeft( (prev) => ((prev + amount >= 1*60) && (prev+amount <=60*60)) ? prev + amount*60 : prev)
            }
        }
    }

    //reset everything to defaults
    const resetLengths = () => {
        setBreakLength(defaultBreak);
        setSessionLength(defaultSession);
        setTimeLeft(defaultSession*60);
    }

    return (
        <div id="container" >
            <div id='break-label'><h4 className="display-6">Break Length</h4>
                <button id="break-decrement" onClick={() => changeLength(setBreakLength, -1)}>–</button><span id="break-length">{breakLength}</span><button id="break-increment" onClick={() => changeLength(setBreakLength, 1)}>+</button>
            </div>
            <div id='session-label'><h4 className="display-6">Session Length</h4>
                <button id="session-decrement" onClick={() => changeLength(setSessionLength, -1)}>–</button><span id="session-length">{sessionLength}</span><button id="session-increment" onClick={() => changeLength(setSessionLength, 1)}>+</button>
            </div>
            <div id='timer-label'><h4 className="display-5">Timer:</h4>
                <span id="time-left">{formatTime(timeLeft)}</span>
                <br />
                <button id="start_stop"><i className="fa-solid fa-play"></i><i className="fa-solid fa-pause"></i></button>
                <button id="reset" onClick={resetLengths}><i className="fa-solid fa-rotate-left"></i></button>
            </div>

        </div>
    )
}
ReactDOM.render(<App />, document.getElementById('app'))