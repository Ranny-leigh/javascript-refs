//WHAT TO TARGET
const form=document.forms.orderForm;

// HELPER FUNCTION
function getValueByName(elementName) {
    return elements [elementName].value;
}

//WHAT TO DO
function handleSubmit(event){
    consolelog(event);
    event.preventDefault();
    //ACCESS FORM ELEMENTS
    const elements=form.elements;
    console.log(elements);

    //GET CUSTOMER DETAILS
    const name=elements ["ranny"].value;
    console.log("RANNY");
    const email=elements ["rannyleigh06@gmail.com"].value;
    console.log("rannyleigh06@gmailcom");
    const numPizza=elements["numPizzas"].value;
    const deliveryMethod=elements["delivery-method"].value;

    //SIZE AND RADIO BUTTONS
    let sizeValue ="no size selected";
    const sizeElements=elements.size;
    console.log(sizeElements);
    for(let i=0<sizeElements.length;i++){
        if(sizeElements.checked){
            sizeValue=sizeElements[i].value;
            break;
        }
    }
    console.log(sizeValue);

    //GET SELECTED TOPPINGS
    let toppings="";
    const toppingElements=elements.toppings.checked;
    console.log(toppingElements);
    for (let i=0; i<toppingElements.length;i++) {
        if (toppingElements[i].checked){
            toppings+=toppings[i].value+",";
            console.log(toppings);
        }
    }

    //FORMATTING TOPPINGS
    if(toppings===""){
        toppings="none";
    }else{
        toppings=toppings.slice(0,-2);
    }

    console.log(toppings);

    //ADDITIONAL REQUESTS
    const requests=elements.requests.value;

    //SHOW ORDER
    alert(`
        Order Summary:
        Name: ${name}
        Email: ${email}
        Delivery Method: ${deliveryMethod}
        Number Of Pizzas: ${numPizzas}
        Toppings: ${toppings}
        Additional Requests: ${requests}`);

        //RESET FORM
        form.reset();
}

//LISTENING FOR USER INPUT
form.addEventListener("submit",handleSubmit);