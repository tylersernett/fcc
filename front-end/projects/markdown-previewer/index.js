function App() {
    const [text, setText] = React.useState("");

    return (
        <div className="container-fluid">
            <div className="text-center"><h1>Markdown Previewer</h1></div>
            <div className="row">
                {/* editor  */}
                <div className="col"><h2>Raw Editor</h2>
                    <textarea
                        placeholder="type raw markdown here"
                        value={text}
                        onChange={
                            (event) => {
                                setText(event.target.value);
                            }
                        }>
                        {/* onChange....: whenever the text changes, use hook to update text variable */}


                    </textarea>
                </div>
                {/* previewer */}
                <div className="col"><h2>Preview</h2>
                    <div dangerouslySetInnerHTML={{ __html: marked.parse(text) }}>
                        {/* displaying {marked.parse(text)} in divs will output raw preformatted HTML -- 
                we must set inner HTML instead to ensure the raw data actually gets formatted */}
                    </div>
                </div>


            </div>
        </div>
    )
}

marked.setOptions({ breaks: true }) //false: makes text with linebreaks appear together on one line

ReactDOM.render(<App />, document.getElementById('app'))
