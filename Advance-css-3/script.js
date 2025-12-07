addEventListener("mousemove", (e) => {
    console.log(e.clientX, e.clientY)


    document.body.style.setProperty("--x", e.clientX + "px")
    document.body.style.setProperty("--y", e.clientY + "px")

})
document.addEventListener("mousemove",(e)=>{
    document.body.style.setProperty("--x", e.clientX+"px");
    document.body.style.setProperty("--y", e.clientY+"px");
});

let video = document.getElementById("bgVideo");
let soundBtn = document.getElementById("soundBtn");

soundBtn.addEventListener("click", () => {
    video.muted = !video.muted;

    if(!video.muted){
        video.play();
        soundBtn.innerText = "🔊 Enable Sound";
    } else {
        soundBtn.innerText = "🔇 Mute Sound";
    }
});
