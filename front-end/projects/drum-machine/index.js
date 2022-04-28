function App() {
    const padArr = [
        {
            keyCode: 81,
            text: 'Q',
            id: 'Chord-1',
            src: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
        },
        {
            keyCode: 87,
            text: 'W',
            id: 'Chord-2',
            src: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
        },
        {
            keyCode: 69,
            text: 'E',
            id: 'Chord-3',
            src: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
        },
        {
            keyCode: 65,
            text: 'A',
            id: 'Shaker',
            src: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
        },
        {
            keyCode: 83,
            text: 'S',
            id: 'Open-HH',
            src: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
        },
        {
            keyCode: 68,
            text: 'D',
            id: 'Closed-HH',
            src: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
        },
        {
            keyCode: 90,
            text: 'Z',
            id: 'Punchy-Kick',
            src: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
        },
        {
            keyCode: 88,
            text: 'X',
            id: 'Side-Stick',
            src: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
        },
        {
            keyCode: 67,
            text: 'C',
            id: 'Snare',
            src: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
        }
    ];

    const [lastKey, setLastKey] = React.useState("-");

    //side effect: each time a key is pressed, pass the key as the selector id to the playSound function
    React.useEffect(() => {
        document.addEventListener('keydown', (e) => {
            playSound(e.key.toUpperCase())//event.key lowercase by default
        })
    }, []);

    //each audio sample is stored with an id of Q,W,E, etc.
    //This id gets passed into the function when a button is clicked--
    //we then locate the audio sample, and play it
    const playSound = (selector) => {
        const sample = document.getElementById(selector)
        if (sample) { //add this check so unbound keypresses don't trigger anything
            sample.play()
            setLastKey(selector) //for display
        }
    }

    return (
        <div id="drum-machine">
            <div id="display"><p>{lastKey}</p><br/>
                <div className="pad-grid">
                    {padArr.map((pad) => (
                        <div className="drum-pad btn btn-primary"
                            id={pad.keyCode}
                            onClick={() => playSound(pad.text)}>
                            {pad.text}
                            <audio className="clip" src={pad.src} id={pad.text}></audio>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById('app'))