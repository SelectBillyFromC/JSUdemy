const task3Element = document.getElementById('task-3');

// Regular Function
//
// function displayAlert() {
//     alert("Hello!")
// }

// Anonymous Function use
const anonDisplayAlert = () => {
    alert("Hello, (Anonymous)")
}

function displayAlertWithName(name) {
    alert(`Hello, ${name}!`)
}
task3Element.addEventListener('click', anonDisplayAlert)
displayAlertWithName("Phil")

const concatName = (str1, str2, str3) => {
    let concatText = `${str1}, ${str2}, and ${str3}`;
    return concatText;    
}

displayAlertWithName(concatName('Chaewon', 'Karina', 'Winter'))

