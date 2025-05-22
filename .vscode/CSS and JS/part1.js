function changeImage(){
    let image=document.getElementById("change-image");

    image.src="blastoise.png";
    image.alt="blastoise";
}

function swapImages(){
    let image=document.getElementById("change-image");
    console.log(image.getAttribute("src"));

    if (image.getAttribute("src")==="squirtle.png") {
        image.src="blastoise.png";
        image.alt="blastoise"
    } else{
         image.src="squirtle.png";
        image.alt="squirtle";
    }
}

function addHeading(){
    let newElement=document.createElement("h2");

    let parentContainer=
}