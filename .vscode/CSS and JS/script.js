function changeBoxColour(){
    let box1=document.getElementById("box");

    box1.style.backgroundColor="blue";
}

buttonBoxOne.addEventListener("click",changeBoxColour);

changeBoxColour();

function changeParagraphColour(){
    let paragraphs=document.getElementsByTagName("p");

    paragraphs.style.backgroundColor="red";

    for(let i=0;i<paragraphs.length;i++){
        paragraphs.style.color="blue";
    }
}

changeParagraphColour()

let appearButton=document.getElementById("appear-Button")
function makeBoxAppear(){
    let box=document.getElementById("hidden-box");

    box.style.display="block";
}

appearButton.addEventListener("click",makeBoxAppear);

function changeBoxesColour(){
    let boxes=document.getElementsByClassName("box-class");
    console.log("boxes")
    for(let i=0<boxes.length;i++) {
        boxes[i].style.backgroundColor="lightCoral";
    }
}

function resetStyling(){
    let boxes=document.getElementsByClassName("box-class");

    for (let i=0;i<boxes.length;i++);
}