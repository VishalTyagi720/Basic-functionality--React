import React from "react";

function FnArr() {

    const Function_Array = [
        function add(a, b) {
            return a + b;
        },
        function subtract(a, b) {
            return a - b;
        },
        function multiply(a, b) {
            return a * b;
        },
        function divide(a, b) {
            return a / b;
        },
    ]

    return (
        <div>
            <div>Function Array:</div>
            {Function_Array.map((fun) => {
                return (
                    <li key={fun}>{fun(10,2)}</li>
                )
            })}
        </div>
    )
}

export default FnArr;