const rangeBar = document.querySelector(`#rangeBar`);
const output = document.querySelector(`.rangeBar-number`);
const container = document.querySelector(`.container`);
const blockContainer = document.querySelector(`.container-block`);

//Show Range Bar Values 
rangeBar.onchange = () => {
    output.innerHTML = rangeBar.value;
    randomColor()
}

//Random Color

function randomColor () {
    let color;

   console.log( Math.floor(Math.random() * 256))




}



// Create the blocks
function createDiv() {
    let divs = rangeBar.value * rangeBar.value;
    blockContainer.innerHTML = ``
    for(i = 0; i < divs; i++) {
        let newDiv = document.createElement(`div`);
        newDiv.setAttribute(`class`, `newDiv`);
        newDiv.style.width = (696 / rangeBar.value) + "px";
        newDiv.style.height = (696 / rangeBar.value) + "px";
        
        blockContainer.appendChild(newDiv);


        newDiv.addEventListener(`mouseover`, function(event){
            event.target.style.backgroundColor = `black`;
        })
    
    }


}


createDiv()









