let heart = ["❤️","❤️","❤️"]
document.addEventListener("mousemove", (e)=>{
    let body = document.querySelector("body");
    let span = document.createElement("span");
    let x= e.offsetX;
    let y = e.offsetY;
    span.style.left = x + 'px'
    span.style.top = y+ 'px'
    let icon = heart[Math.floor(Math.random()*heart.length)]
    span.innerText = icon;
    let size = Math.random()*20;
    span.style.fontSize = 2 +size+ 'px';
    body.appendChild(span)
    setTimeout(function(){
        span.remove()
    },1000)
})