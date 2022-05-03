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
        e.preventDefault(); //prevent refresh

        const value = e.target.innerHTML;

        //if there's an old operand that hasn't been handled!!!

        //expression 3 + 5 * 6 - 2 / 4 should produce 32.5 or 11.5 as an
        //answer, depending on the logic your calculator uses
        //(formula vs. immediate execution) 
        if (!(calc.num === 0 && value == 0)) {
            setCalc({
                ...calc,
                num: (calc.num === 0) ? value : calc.num + value,//no leading 0s -- needs ===, as 0. == 0
                //result: (calc.operand)? calc.result : 0//!!!!!fix -- needs equals trigger
            });
        }
    };

    const equalsClickHandler = (op="") => {
        switch (calc.operand) {
            case "add":
                setCalc({ ...calc, num: 0, operand: op, result: (Number(calc.result) + Number(calc.num)).toString() })
                break;
            case "subtract":
                setCalc({ ...calc, num: 0, operand: op, result: (Number(calc.result) - Number(calc.num)).toString() })
                break;
            case "multiply":
                setCalc({ ...calc, num: 0, operand: op, result: (Number(calc.result) * Number(calc.num)).toString() })
                break;
            case "divide":
                setCalc({ ...calc, num: 0, operand: op, result: (calc.num == "0") ? "Cannot divide by 0" : (Number(calc.result) / Number(calc.num)).toString() })
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
        console.log(calc)
    };

    //load operand into state
    const operandClickHandler = (e) => {
        e.preventDefault();
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
                <div id="display" className="text-center">{calc.num ? calc.num : calc.result}</div>
                <div className="button-box">
                    {btns.map((item) =>
                        <div className="btn-primary text-center m-1"
                            id={item[1]}
                            key={item[1]}
                            onClick={(item[1] === "negative") ? negativeClickHandler :
                                (item[1] === "decimal") ? decimalClickHandler :
                                    (item[1] === "clear") ? clearClickHandler :
                                        (item[1] === "add" || item[1] === "subtract" || item[1] === "multiply" || item[1] === "divide") ? operandClickHandler :
                                            (item[1] === "equals") ? equalsClickHandler : numberClickHandler}>
                            {item[0]}
                        </div>
                    )}
                </div>
            </div >
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById('app'))