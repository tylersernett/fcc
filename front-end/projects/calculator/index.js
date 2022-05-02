function App() {
    // {display, id}
    const btns = [[7, "seven"], [8, "eight"], [9, "nine"], ["/", "divide"],
    [6, "six"], [5, "five"], [4, "four"], ["x", "multiply"],
    [3, "three"], [2, "two"], [1, "one"], ["-", "subtract"],
    ["±", "negative"], [0, "zero"], [".", "decimal"], ["+", "add"],
    ["c", "clear"], ["=", "equals"]];

    const [calc, setCalc] = React.useState({
        num: 0,
        operand: "",
        result: 0
    })
    return (
        <div>
            <div className="calc-body">
                <div id="display" className="card text-right">{calc.result}</div>
                <div className="button-box">
                    {btns.map((item) =>
                        <div className="btn-primary text-center m-1" id={item[1]}>{item[0]}
                        </div>
                    )}
                </div>
            </div >
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById('app'))