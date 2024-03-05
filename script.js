const rangeBar = document.querySelector(`#rangeBar`);
const output = document.querySelector(`.rangeBar-number`);
const container = document.querySelector(`.container`);
const blockContainer = document.querySelector(`.container-block`);
const colorBlack = document.querySelector(`#color-black`);
const colorRaimbow = document.querySelector(`#color-raimbow`);
const colorWhite = document.querySelector(`#color-white`);
const clear = document.querySelector(`#clear`);

//Show Range Bar Values and update createDiv()
rangeBar.onchange = () => {
    output.innerHTML = rangeBar.value;
    randomColor()
}

// Generate a Random Color

function randomColor() {
    let color;

    color = `rgb(` + Math.floor(Math.random() * 256) + `,` + Math.floor(Math.random() * 256) + `,` + Math.floor(Math.random() * 256) + `)`

    return color;


}



// Create the blocks
function createDiv() {
    let width = blockContainer.clientWidth;
    let height = blockContainer.clientHeight;
    let divs = rangeBar.value * rangeBar.value;
    blockContainer.innerHTML = ``
    for(i = 0; i < divs; i++) {
        let newDiv = document.createElement(`div`);
        newDiv.setAttribute(`class`, `newDiv`);
        newDiv.style.width = (width / rangeBar.value) + "px";
        newDiv.style.height = (height / rangeBar.value) + "px";
        
        blockContainer.appendChild(newDiv);


        // Change Colors
        
        //  Default color
        newDiv.addEventListener(`mouseover`, () =>{
             newDiv.style.backgroundColor = `black`;
        })
        // Random Color button
        colorRaimbow.addEventListener(`click`, ()=> {
            newDiv.addEventListener(`mouseover`, ()=>{
                newDiv.style.backgroundColor = randomColor()
            })
        })
        // Black color Button

        colorBlack.addEventListener(`click`, () => {
            newDiv.addEventListener(`mouseover`, ()=>{
                newDiv.style.backgroundColor = `black`
            })

        })
        colorWhite.addEventListener(`click`, () => {
            newDiv.addEventListener(`mouseover`, ()=>{
                newDiv.style.backgroundColor = `white`
            })

        })
        // Clear button
        clear.addEventListener(`click`, () =>{
            newDiv.style.backgroundColor = `white`
        })


    
    }


}


createDiv()









