// Question 1 Starts
function evenOdd() {
    let inputNumber = parseInt(prompt("Enter your number"));
    let q1 = document.getElementById("q1")
    if (isNaN(inputNumber)) {
        alert("Please enter a valid number");
    } else if (inputNumber % 2 === 0) {
        alert(`${inputNumber} is Even Number`);
        q1.innerHTML = `${inputNumber} is Even Number`
    } else {
        alert(`${inputNumber} is Odd Number`);
        q1.innerHTML = `${inputNumber} is Odd Number`
    }
}

// Question 2 Starts
function takeUserInput(){
    marks = parseInt(prompt("Enter marks between 1 to 600"))
    return marks
}

function calculatePercentage (totalObtainedMarks) {
        return Math.round((totalObtainedMarks / 600) * 100);
}
function  calculateGrade(percentage) {
    if (percentage >= 90 && percentage<= 100 ) {
        return `You got ${percentage}% and Your grade is  A++`
    }else if (percentage >=80 && percentage <90 ) {
        return `You got ${percentage}% and Your grade is  A+`
    }else if (percentage >=70  && percentage <80) {
        return `You got ${percentage}% and Your grade is  A`
    }else if (percentage >=60 && percentage <70) {
        return `You got ${percentage}% and Your grade is  B`
    }else if (percentage >=50 && percentage <60) {
        return `You got ${percentage}% and Your grade is  C`
    }else{
        return `You got ${percentage}% and Your are Fail`
    }
}
function calculateResult() {
    let UserInput;
    UserInput = takeUserInput()
    if (isNaN(UserInput)) {
        alert(`Please enter a number`)
    }else if (UserInput>600) {
        alert("Enter Number Between 1 to 600")
    }else{
        UserInput = calculatePercentage (UserInput)
        UserInput = calculateGrade(UserInput)
        alert(UserInput)
        q2.innerHTML = `${UserInput}`
        // document.body.appendChild(q2)

    }
    
}

// alert(calculateResult());