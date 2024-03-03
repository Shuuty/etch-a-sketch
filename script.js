const rangeBar = document.querySelector(`#rangeBar`);
const output = document.querySelector(`.rangeBar-number`);
const container = document.querySelector(`.container`);


rangeBar.onchange = () => {
    output.innerHTML = rangeBar.value;
}

function createDiv() {
    let columns = rangeBar.value;
    let row = rangeBar.value;
    let divs = columns * row;
    container.innerHTML = ``
    for(i = 0; i < divs; i++) {
        let newDiv = document.createElement(`div`);
        newDiv.setAttribute(`class`, `newDiv`);
        container.appendChild(newDiv);
        newDiv.style.width = (1 / columns * 100) + "%";
        newDiv.addEventListener(`mouseover`, function(event){
            event.target.style.backgroundColor = `black`;
        })
    
    }


}


createDiv()









