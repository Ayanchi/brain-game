let numberAndBooleanNumiration = [1,2,3]

function booleanValue(index){
    const displayText = document.querySelector(`.chooseText${index}`);
    
    if (displayText.textContent === "?") {
        displayText.textContent = "true";
    } else if (displayText.textContent === "false") {
        displayText.textContent = "?";
    } else {
        displayText.textContent = "false";
    }
    console.log(displayText.textContent)

}

function solveEx(){
    let exeArray = []
    numberAndBooleanNumiration.map((idx) => {
        const displayNumber = document.querySelectorAll(`.number${idx}`);
        const displayBoolean = document.querySelectorAll(`.boolean${idx}`);
        if(displayNumber.textContent === 1){
            exeArray.pust(true)
        }
        
    })
    console.log(exeArray)
    
}
solveEx()
const displayNumber = document.querySelector(`.number${1}`);
