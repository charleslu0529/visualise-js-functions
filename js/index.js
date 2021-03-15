// I have used arrow functions in here because I like them.
// Basically:
// const functionName = () => { What to do ; }
// Is the same as:
// function functionName() { What to do ; }


// This function takes in an array of numbers
// then returns the average of those numbers
const avg = (numbersArray) => {
    let total = 0;

    // loop through number array and get the total
    for (let i = 0; i < numbersArray.length; i++) {
        total = total + parseInt(numbersArray[i]) ;
    }

    // calculate result (average)
    let result = total / numbersArray.length;

    return result;
}

// This function gets the number from the DOM
// and returns an array of numbers
const getNumbers = () => {
    let inputElements = document.getElementsByClassName("number-input");
    let numbers = [];

    // loop through the input elements because there's
    // more than one element with the class "number-input"
    for (let i=0;i<inputElements.length;i++) {
        
        // input elements have a "value" property that
        // stores the input value
        numbers.push(inputElements[i].value);
    }

    return numbers;
}

// function to update the result p tag
updateAvgResult = () => {

    // get element to update
    let pTag = document.getElementById("displayAvgNumber");

    // get result
    const result = avg(getNumbers());
    
    // update that element
    pTag.textContent = result;

    // A JS function should always return something
    // this function doesn't really produce a new value
    // to use for later. So we return nothing.
    // you can also use
    // return undefined
    return;
}

// This adds a function to run when
// the button with ID avgButton is clicked
document.getElementById("avgButton").onclick = () => {
    updateAvgResult();
};





// ==============================================================================================//

// function to compare 2 strings stictly
const compareStrings = (word1, word2) => {
    return word1 === word2;
}

const updateCompareResult = () => {

    // get element with input values
    let textInputs = document.getElementsByClassName("text-input");
    
    // get result
    let result = compareStrings(textInputs[0].value, textInputs[1].value);
    
    // get element to update
    let pTag = document.getElementById("compareResult");
    
    // update that element
    pTag.textContent = result;
    return;
}

// Tell button to call update function that runs the comparison
document.getElementById("compareButton").onclick = () => {
    updateCompareResult();
};




// =====================================================================//


// function to create new DOM element and append as a child
// used to simulate what a console.log does
const createLog = () => {
    
    // get element with text input
    let textInputs = document.getElementsByClassName("log-input");
    
    // get element which we want to append to
    let logArea = document.getElementById("logArea");
    
    // create new DOM element
    let newLog = document.createElement("p");
    
    // modify text content of new DOM element
    // to be the inputted text
    newLog.textContent = textInputs[0].value;

    // Append it as a child of the selected parent element
    logArea.append(newLog);
    return;
}


document.getElementById("logButton").onclick = () => {
    createLog();
}