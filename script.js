
var color = document.querySelectorAll(".color")
var coloralt = document.querySelectorAll(".color-alt")
var container = document.querySelector(".container")

function start(event) {
    function randomColorGen() {
        
        hexColor = "#"+(Math.random() * 0xFFFFFF << 0).toString(16);

        //red ssettings
        if (event === 'red') {
            hexColor = hexColor.substring(0, 1) + "00" + hexColor.substring(3, 5) + hexColor.substring(5);
        }
        if (event === 'redlight') {
            hexColor = hexColor.substring(0, 1) + "ff" + hexColor.substring(3, 5) + hexColor.substring(5);
        }
        if (event === 'reddark') {
            hexColor = hexColor.substring(0, 1) + hexColor.substring(1, 3) + "00" + "00";
        }
        //----------------------------

        //green settings
        if (event === 'green') {
            hexColor = hexColor.substring(0, 1) + hexColor.substring(1, 3) + "00" + hexColor.substring(5);
        }
        if (event === 'greenlight') {
            hexColor = hexColor.substring(0, 1) + hexColor.substring(1, 3) + "ff" + hexColor.substring(5);
        }
        if (event === 'greendark') {
            hexColor = hexColor.substring(0, 1) + "00" + hexColor.substring(3, 5) + "00";
        }
        //----------------------------

        //blue settings
        if (event === 'blue') {
            hexColor = hexColor.substring(0, 1) + hexColor.substring(1, 3) + hexColor.substring(3, 5) + "00";
        }
        if (event === 'bluelight') {
            hexColor = hexColor.substring(0, 1) + hexColor.substring(1, 3) + hexColor.substring(3, 5) + "ff";
        }
        if (event === 'bluedark') {
            hexColor = hexColor.substring(0, 1) + "00" + "00" + hexColor.substring(5);
        }
        //----------------------------

        return hexColor;
    }
        for (let i = 0; i < color.length; i++) {
            color[i].style.backgroundColor = randomColorGen();
            coloralt[i].innerHTML = randomColorGen();
            container.style.background = `linear-gradient(to bottom, ${hexColor.substring(0, 1) + hexColor.substring(1, 3) + hexColor.substring(3, 5) + hexColor.substring(5) + "50"},${hexColor.substring(0, 1) + hexColor.substring(1, 3) + hexColor.substring(3, 5) + hexColor.substring(5) + "50" })`;
        }

    

}

for (let i = 0; i < color.length; i++) {
    color[i].addEventListener("click", ()=>{
        navigator.clipboard.writeText(coloralt[i].textContent)
        coloralt[i].classList.add("copys")
        setTimeout(() => {
            coloralt[i].classList.remove("copys")
        }, 500);
    })   
}


start() 
