import React from 'react'

function FunctionParenthesisAndParameters(){

    const square  = (a) => a * a;
    const plusOne = a => a + 1;
    const twoSquared = square(2);
    const threePlusOne = plusOne(3);

    return (
        <div>
            <h3>Function Paranthesis and Parameters</h3>
            twoSquared = {twoSquared}<br />
            threePlusOne = {threePlusOne}<br />
        </div>
    )
}

export default FunctionParenthesisAndParameters