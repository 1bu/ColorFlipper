const ctn = document.getElementById('container');
const btn = document.getElementById('btn');
const colorText = document.getElementById('color')
const colors = ['red','green','blue','yellow','white'];


btn.addEventListener("click", (e)=>{
    let background = colors[randomNumber()];
    ctn.style.backgroundColor = background;
    colorText.style.color = background;
    colorText.innerHTML = background;
});


const randomNumber = () =>{
    return Math.floor(Math.random() * colors.length);
}