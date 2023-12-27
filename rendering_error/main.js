// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

let errorLine = document.getElementById("error");
console.log(errorLine);

function renderError() {
    // errorLine.innerHTML = "Something went wrong, please try again";
    errorLine.textContent = "Something went wrong, please try again";
}