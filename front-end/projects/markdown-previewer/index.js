function App() {
    const holderText = 
`# format: hashes (#) for headers
underscore (\_) _for italics_
double asterisk (\*\*) **for bold**
tilde (\~) ~~for strikethrough~~

backticks ( \`\` ) \` for inline code\`
three backticks for fenced codeblock:
\`\`\` 
<textarea
    id="editor"
    value={text}
    onChange={(e) => setText(e.target.value)}>
</textarea>
\`\`\`

> angled bracket (\>) for blockquotes

1. numerals with a period
2. for an ordered list
- dashes with a space
- for an unordered list

## links and images
[link text in brackets]+(URL in parentheses)
[linked example](https://www.example.com)
same format for images, but start the line with !
![alt text]+(image URL in parentheses)
![react logo](./react-logo.png)`

    const [text, setText] = React.useState(holderText);

    return (
        <div className="container-fluid">
            <div className="text-center"><h1 className="display-4">Markdown Previewer</h1></div>
            <div className="row">
                {/* editor  */}
                <div className="col"><h2>Raw Editor</h2>
                    <textarea className = "px-1"
                        id="editor"
                        value={text}
                        onChange={(event) => setText(event.target.value)}>
                        {/* onChange....: whenever the text changes, use state update hook to update text variable */}
                    </textarea>
                </div>

                {/* previewer */}
                <div className="col"><h2>Preview</h2>
                    <div className = "px-2" id="preview" dangerouslySetInnerHTML={{ __html: marked.parse(text) }}>
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
