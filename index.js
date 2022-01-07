
// document.addEventListener('DOMContentLoaded', () => {
//     console.log('The DOM has loaded'); //This will not be logged immediately 
// })

// console.log('"This console.log() fires when index.js loads - before DOMContentLoaded is triggered');
//The above is logged first.


//Use the event's callback function to target the paragraph element with id="text" 
//and replace the text with "This is really cool!"
document.addEventListener('DOMContentLoaded', () => {
    const element = document.getElementById('text');
    element.innerHTML = "<p>This is really cool!</p>";
})