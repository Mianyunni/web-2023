import React from "react";
function WorkingWithArrays(){
    var functionScoped = 2;
    let blockScoped = 5;
    const constant1 = functionScoped - blockScoped;
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ['string1', 'string2'];

    let variableArray1 = [
    functionScoped,   blockScoped,
    constant1,        numberArray1,   stringArray1
    ];

    return (
        <div>
            <h4>Working With Arrays</h4>
            functionScoped = {functionScoped}
            <br />
            blockScoped = {blockScoped}
            <br />
            numberArray1 = {numberArray1}
            <br />
            string1 = {stringArray1}
            <br />
            constant1 = {constant1}
            <br />
            variableArray1 = {variableArray1}
        </div>
    )

}
export default WorkingWithArrays