function BigSize(){
    document.querySelector("h2").classList.add("big");
    document.querySelector("p").classList.add("big");
    document.querySelector("p").classList.remove("small");
    document.querySelector("h2").classList.remove("small");



}
document.querySelector(".bigbtn").onclick=BigSize;


function SmallSize(){
    document.querySelector("h2").classList.add("small");
    document.querySelector("p").classList.add("small");
    document.querySelector("p").classList.remove("big");
    document.querySelector("h2").classList.remove("big");
}
document.querySelector(".smallbtn").onclick=SmallSize;