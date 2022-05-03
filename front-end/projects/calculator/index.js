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

    React.useEffect(() => {
        console.log(calc);
    })

    const numberClickHandler = (e) => {
        const value = e.target.innerHTML;
        if (!(calc.num === 0 && value == 0)) { //no leading 0s
            setCalc({
                ...calc,
                num: (calc.num === 0) ? value : calc.num + value,//needs ===, as 0. == 0
                result: (!calc.operand) ? 0 : calc.result //reset result to 0 when clicking a # after equalsHandling
            });
        }
    };

    const equalsClickHandler = (opr = "") => {
        switch (calc.operand) {
            case "add":
                setCalc({ ...calc, num: 0, operand: opr, result: (Number(calc.result) + Number(calc.num)).toString() })
                break;
            case "subtract":
                setCalc({ ...calc, num: 0, operand: opr, result: (Number(calc.result) - Number(calc.num)).toString() })
                break;
            case "multiply":
                setCalc({ ...calc, num: 0, operand: opr, result: (Number(calc.result) * Number(calc.num)).toString() })
                break;
            case "divide":
                setCalc({ ...calc, num: 0, operand: opr, result: (calc.num == "0") ? "Cannot divide by 0" : (Number(calc.result) / Number(calc.num)).toString() })
                break;
            default:
                break;
        }
    };

    const decimalClickHandler = () => {
        //prevent adding multiple decimals
        if (!calc.num.toString().includes('.')) {
            setCalc({
                ...calc,
                num: (calc.num == 0) ? "0." : calc.num + "."//add leading 0 for proper fractions
            })
        }
    };

    const negativeClickHandler = () => {
        setCalc({
            ...calc,
            num: (calc.num *= -1)
        });
    };

    const operandClickHandler = (e) => {
        const op = e.target.id;

        if (calc.num && calc.result) {
            equalsClickHandler(op);//treat operand input as equals when it's a operand-to-operand chain input
        } else {
            setCalc({
                ...calc,
                operand: op,
                //if there's a result & no new number, re-use old result for equals-to-operand chain input
                result: (calc.result && !calc.num) ? calc.result : calc.num,
                num: 0
            });
        }
    }

    const clearClickHandler = () => {
        setCalc({
            num: 0,
            operand: "",
            result: 0
        });
    }

    return (
        <div>
            <div className="card calc-body">
                <div id="display" className="text-end">{calc.num ? calc.num : calc.result}</div>
                <div className="button-box">
                    {btns.map((item) =>
                        <div className="btn-primary text-center m-1"
                            id={item[1]}
                            key={item[1]}
                            onClick={(item[1] === "negative") ? negativeClickHandler :
                                (item[1] === "decimal") ? decimalClickHandler :
                                    (item[1] === "clear") ? clearClickHandler :
                                        (item[1] === "add" || item[1] === "subtract" || item[1] === "multiply" || item[1] === "divide") ? operandClickHandler :
                                            (item[1] === "equals") ? () => equalsClickHandler() : numberClickHandler}>
                                                {/* anonymous arrow function needed on equals Handler because it has a default parameter */}
                            {item[0]}
                        </div>
                    )}
                </div>
            </div >
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById('app'))