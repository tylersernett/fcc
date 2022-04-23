function App() {
    const [quotes, setQuotes] = React.useState([]);
    const [randomQuote, setRandomQuote] = React.useState([]);

    //useEffect args: callback function, array of dependencies
    React.useEffect(() => {
        async function fetchData() {  //async/wwait vs promises: https://levelup.gitconnected.com/async-await-vs-promises-4fe98d11038f
            const response = await fetch("https://type.fit/api/quotes")
            const data = await response.json();

            setQuotes(data);
            let randomIndex = Math.floor(Math.random * data.length);
            setRandomQuote(data[randomIndex]);
        }
        fetchData();

    }, [])

    return (
        <div>Hello Worlds
            {quotes.map(quote => (
                <div>
                    <div>"{quote.text}"</div>
                    <div>-{quote.author}</div>
                </div>
            ))}
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('app'))
// HTML doc needs an element with id='app'