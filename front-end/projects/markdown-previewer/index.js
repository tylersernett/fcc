function App() {
    const holderText = 
`# use # for headers
underscore (\_) _for italics_
double asterisk (\*\*) **for bold**
tilde (\~) ~~for strikethrough~~

backticks ( \`\` ) \` for inline code\`
three backticks for fenced codeblock:
\`\`\` 
<textarea
    id="editor"
    value={text}
</textarea>
\`\`\`

> angle bracket (\>) for blockquotes

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

    // hooks:
    const [text, setText] = React.useState(holderText);

    return (
        <div className="container-fluid text-white">
            <div className="text-center topper"><h1 className="display-4">Markdown Previewer</h1></div>
            <div className="row pb-3">
                {/* =====editor=====  */}
                <div className="col"><p><span className="display-6"> Raw Editor </span><i class="fa-solid fa-pen-to-square"></i></p>
                    <textarea className = "card px-1"
                        id="editor"
                        value={text}
                        onChange={(event) => setText(event.target.value)}>
                        {/* onChange....: whenever the text changes, use state update hook to update text variable */}
                    </textarea>
                </div>

                {/* =====previewer===== */}
                <div className="col"><p><span className="display-6">Output:</span></p>
                    <div className = "card px-2" id="preview" dangerouslySetInnerHTML={{ __html: marked.parse(text) }}>
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