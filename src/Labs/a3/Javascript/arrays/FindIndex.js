import React from 'react'

function FindIndex(){
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ['string1', 'string2', 'string3'];

    const fourfindIndex = numberArray1.findIndex(a => a === 4);
    const string3findIndex = stringArray1.findIndex(a => a === 'string3');

    return (
        <div>
            <h3>FindIndex Function</h3>
            four-index = {fourfindIndex} <br/>
            string3-index = {string3findIndex} <br/>
        </div>
    );
}

export default FindIndex