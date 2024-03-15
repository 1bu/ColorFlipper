const ctn = document.getElementById('container');
const btn = document.getElementById('btn');
const colorText = document.getElementById('color')
const colors = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F',];


btn.addEventListener("click", (e)=>{
    let background = generateColor();
    ctn.style.backgroundColor = `#${background}`;
    colorText.style.color = `#${background}`;
    colorText.innerHTML = `#${background}`;
});


const randomNumber = () =>{
    return Math.floor(Math.random() * colors.length);
}

const generateColor = () =>{
    let color = []
    for(let i = 0; i < 6; i++){
        color.push(colors[randomNumber()]);
    }
    return color.join("");
}
