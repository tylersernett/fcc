function App() {
    const [quotes, setQuotes] = React.useState([]);
    const [randomQuote, setRandomQuote] = React.useState("");
    const [color, setColor] = React.useState("#fff");

    //useEffect args: callback function, array of dependencies
    React.useEffect(() => {
        async function fetchData() {  //async/await vs promises: https://levelup.gitconnected.com/async-await-vs-promises-4fe98d11038f
            const response = await fetch("https://type.fit/api/quotes")
            const data = await response.json();

            setQuotes(data);
            getRandomQuote(data);
        }
        fetchData();

    }, [])

    const getRandomQuote = (arr) => {
        const colors = [
            '#16a085',
            '#27ae60',
            '#2c3e50',
            '#f39c12',
            '#e74c3c',
            '#9b59b6',
            '#FB6964',
            '#342224',
            '#472E32',
            '#BDBB99',
            '#77B1A9',
            '#73A857'];
        
        let randomIndex = Math.floor(Math.random() * arr.length); //don't forget to add () to random()
        setRandomQuote(arr[randomIndex]);

        let randColorIndex = Math.floor(Math.random() * colors.length);
        setColor(colors[randColorIndex]);
    }


    return (
        <div className = "bag" style={{backgroundColor: color, minHeight:"100vh"}} >
            <div className="container custom-container pt-5 "  >
                <div className="jumbotron custom-jumbo py-4" id="quote-box" ><h3>Random Quote Machine <i class="lni lni-comments"></i></h3>
                    <div className="card" >
                        {/* if a random quote is loaded, display it. otherwise, display "loading..." */}
                        {randomQuote ?
                            // empty tags for JSX:
                            <>
                                <div id="text" className="card-body" ><h4>"{randomQuote.text}"</h4></div>
                                <div id="author" className="h-50 card-header text-right">– {randomQuote.author || "Anonymous"}</div>
                            </>
                            :
                            <div className="card-body text-center">
                                <div class="spinner-border text-primary " role="status">
                                    <span class="visually-hidden "></span>
                                </div><h2></h2>
                            </div>}
                    </div>

                    <div className=" pt-1 text-right">
                        {/* if no arguments being passed, just do onClick={getNewQuote}
                    but to pass arguments, call anon function (), as in onClick={ ()=> functionName(argumentName){} */}
                        <button id="new-quote" onClick={() => getRandomQuote(quotes)} className="btn btn-dark m-1"  style={{backgroundColor: color}}>Randomize</button>
                        <a id="tweet-quote" target="_blank" href={
                            "https://twitter.com/intent/tweet?hashtags=quotes&text=" + encodeURIComponent('"' + randomQuote.text + '"') + encodeURIComponent(' -' + randomQuote.author)}>
                            <button className="btn btn-dark"  style={{backgroundColor: color, color:"white"}}><i class="lni lni-twitter-filled"></i> Tweet
                            </button>
                        </a>
                    </div>

                </div>
            </div >
        </div>

    );
}

ReactDOM.render(<App />, document.getElementById('app'))
// HTML doc needs an element with id='app'
// import { createRoot } from 'react-dom/client';
// const container = document.getElementById('app');
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(<App  />);