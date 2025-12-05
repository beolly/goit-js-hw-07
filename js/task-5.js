
const btn=document.querySelector('button.change-color');
const colorSpan=document.querySelector('span.color');
btn.classList.add('button');
btn.addEventListener('click',()=>{
  const newColor=getRandomHexColor();
  document.body.style.backgroundColor=newColor;
  colorSpan.textContent=newColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
