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
    });

    const numberClickHandler = (e) => {
        e.preventDefault(); //prevent refresh

        const value = e.target.innerHTML;
        setCalc({
            ...calc,
            num: (calc.num == 0) ? value : calc.num + value//no leading 0s
        });
    };

    const equalsClickHandler = () => {
        
    };
    //only calculate if there's an operand
    
    const decimalClickHandler = () => {
        //prevent adding multiple decimals
        !calc.num.toString().includes('.') ? 
            setCalc({
                ...calc,
                num: (calc.num==0)? "0." : calc.num+"."//add leading 0 for proper fractions
            })
        : {}
    };
    
    const negativeClickHandler = () => {
        setCalc({
            ...calc,
            num: (calc.num *= -1)
        });
    };
    
    //load opearnd into state
    const operandClickHandler = (e) => {
        e.preventDefault();
        const op = e.target.id;
        setCalc({
            ...calc,
            operand: op
        });
    }

    const clearClickHandler = () => {
        setCalc({
            ...calc,
            num: 0
        });
    }

    return (
        <div>
            <div className="card calc-body">
                <div id="display" className="text-center">{calc.num ? calc.num : calc.result}</div>
                <div className="button-box">
                    {btns.map((item) =>
                        <div className="btn-primary text-center m-1"
                            id={item[1]}
                            key={item[1]}
                            onClick={(item[1] === "negative") ? negativeClickHandler :
                            (item[1] === "decimal") ? decimalClickHandler : 
                            (item[1] === "clear") ? clearClickHandler :
                            (item[1] === "add" || item[1] === "subtract" || item[1] === "multiply" || item[1] === "divide" ) ? operandClickHandler : 
                            (item[1] === "equals") ? equalsClickHandler :numberClickHandler}>
                            {item[0]}
                        </div>
                    )}
                </div>
            </div >
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById('app'))