let btns = document.getElementsByClassName("num");
let textArea = document.querySelector("#textarea");
let expression = "";

Array.from(btns).forEach((el) => {
    el.addEventListener("click", function () {
        let buttonText = el.innerText; 

        if (buttonText === "=") {
            textArea.value = eval(expression); 
            expression = textArea.value; 
        } else if (buttonText === "Delete") {
            textArea.value = ""; 
            expression = ""; 
        } else {
            expression += buttonText; 
            textArea.value = expression; 
        }
    });
});
