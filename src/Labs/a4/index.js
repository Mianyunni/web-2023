import React from "react";
import PassingFunctions from "./PassingFunctions";
import Counter from "./Counter";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import EventObject from "./EventObject";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import ReduxExamples from "./ReduxExamples";
import BooleanStateVariables from "./BooleanStateVariables";

function Assignment4() {
    function sayHello() {
        alert("Hello");
    }
    return (
        <div>
            <h1>Assignment 4</h1>
            <StringStateVariables/>
            <BooleanStateVariables/>
            <ClickEvent/>
            <PassingFunctions the Function={sayHello} />
            <PassingDataOnEvent/>
            <EventObject/>
            <Counter/>
            <StringStateVariables />
            <DateStateVariable/>
            <ObjectStateVariable/>
            <ArrayStateVariable />
            <ParentStateComponent/>
            <ReduxExamples/>
        </div>
    )
}
export default Assignment4;
//pass int values here to Add componennt
// as arrtibutes a and b