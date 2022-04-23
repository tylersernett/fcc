function App() {
    const [quotes, setQuotes] = React.useState([]);
    const [randomQuote, setRandomQuote] = React.useState("");

    //useEffect args: callback function, array of dependencies
    React.useEffect(() => {
        async function fetchData() {  //async/wwait vs promises: https://levelup.gitconnected.com/async-await-vs-promises-4fe98d11038f
            const response = await fetch("https://type.fit/api/quotes")
            const data = await response.json();

            setQuotes(data);
            getRandomQuote(data);
        }
        fetchData();

    }, [])

    const getRandomQuote = (arr) => {
        let randomIndex = Math.floor(Math.random() * arr.length); //don't forget to add () to random()
        setRandomQuote(arr[randomIndex]);
    }


    return (
        <div className="container pt-4 ">
            
            <div className="jumbotron " id="quote-box"><h4>Quote Machine</h4>

                <div className="card" >
                    {/* if a random quote is loaded, display it. otherwise, display "loading..." */}
                    {randomQuote ? (
                        // empty tags for JSX:
                        <>
                            <div id="text" className="card-body">"{randomQuote.text}"</div>
                            <div id="author" className="h-50 card-header text-right">-{randomQuote.author || "Anonymous"}</div>
                        </>
                    ) : <h2>Loading...</h2>}
                    {/* if no arguments being passed, just do onClick={getNewQuote}
                    but to pass arguments, call anon function (), as in onClick={ ()=> functionName(argumentName){} */}

                </div>
                <div className=" pt-1 text-right">
                    <button id="new-quote" onClick={() => getRandomQuote(quotes)} className="btn btn-info">Randomize</button>
                    <a id="tweet-quote" target = "_blank" href={
                        "https://twitter.com/intent/tweet?hashtags=quotes&text=" + encodeURIComponent('"' + randomQuote.text + '"') + encodeURIComponent(' -' + randomQuote.author)}>
                        <button  className="btn btn-primary">Tweet
                        </button>
                    </a>
                </div>
            </div>
        </div >
    );
}

ReactDOM.render(<App />, document.getElementById('app'))
// HTML doc needs an element with id='app'
// import { createRoot } from 'react-dom/client';
// const container = document.getElementById('app');
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(<App  />);