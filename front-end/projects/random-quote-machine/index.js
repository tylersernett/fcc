function App() {
    const [quotes, setQuotes] = React.useState([]);
    const [randomQuote, setRandomQuote] = React.useState("");

    //useEffect args: callback function, array of dependencies
    React.useEffect(() => {
        async function fetchData() {  //async/wwait vs promises: https://levelup.gitconnected.com/async-await-vs-promises-4fe98d11038f
            const response = await fetch("https://type.fit/api/quotes")
            const data = await response.json();

            setQuotes(data);
            getNewQuote(data);
        }
        fetchData();

    }, [])

    const getNewQuote = (arr) => {
        let randomIndex = Math.floor(Math.random() * arr.length); //don't forget to add () to random()
        setRandomQuote(arr[randomIndex]);
    }


    return (
        <div className="container pt-4">
            <div className="jumbotron"><h4>Quote Machine</h4>

                <div className="card">
                    {randomQuote ? (
                        // empty tags for JSX:
                        <>
                            <div className="card-header">"{randomQuote.text}"</div>
                            <div className="card-body">-{randomQuote.author || "Anonymous"}</div>
                        </>
                    ) : <h2>Loading...</h2>}
                    {/* if no arguments being passed, just do onClick={getNewQuote}
                    but to pass arguments, call anon function (), as in onClick={ ()=> functionName(argumentName){} */}
                    <button onClick={() => getNewQuote(quotes)} className="btn btn-outline-info">Randomize</button>
                </div>

            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('app'))
// HTML doc needs an element with id='app'
// import { createRoot } from 'react-dom/client';
// const container = document.getElementById('app');
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(<App  />);