function App() {
    const [text, setText] = React.useState("enter markdown here");
    
    return (
        <div className = "container-fluid">
            <div className="text-center"><h1>Markdown Previewer</h1></div>
            <div className="row">
                {/* editor  */}
                <div className="col"><h2>Raw Editor</h2>
                    <textarea value={text}></textarea>
                </div>
                {/* previewer */}
                <div className="col"><h2>Preview</h2>
                <Preview markdown={text}> </Preview>
                </div>


            </div>
        </div>
    )
}

function Preview() {
    return (
        <div>

        </div>
    )
}
ReactDOM.render(<App />, document.getElementById('app'))
