//WHERE TO GO
const submitButn=document.getElementById ("submit-btn");

id="submit-btn"

const userInput=document.getElementById("user-input");

id="user-input"

//WHAT TO DO
function handleSubmit() {
    console.log(typeof userInput.value);
    alert("THANK YOU");
}

//LISTEN FOR THE USER'S INPUT
submitButn.addEventListener("SEND AWAY", handleSubmit);
