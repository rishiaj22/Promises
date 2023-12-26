// Image Slider
let sliders = document.querySelectorAll(".slider");
let count = 0;
sliders.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

setInterval(() => {
    count = (count + 1) % sliders.length;
    sliders.forEach((slide) => {
        slide.style.transform = `translateX(-${count * 100}%)`;
    });
}, 5000);

// Order Buttons 
const menu = document.querySelector("#menu");
const orderBtn = document.querySelector("#orderBtn");
const newOrder = document.querySelectorAll(".orderAgain");
let orderDiv = document.querySelectorAll(".order"); 


// Showing status 
let currentStatus = document.querySelector("#currentStatus");
let orderID = document.querySelector("#orderID");
let firstOrder = document.getElementById("firstOrder");


// Event Listeners for Option Buttons
let orderCount = 0;
orderBtn.addEventListener("click", function () {
    currentStatus.innerText = "Your order is processing...";

    const orderProcessing = new Promise((resolve, reject) => {
        setTimeout(() => {
            let selectedOption = document.querySelector('input[name="menuOption"]:checked');

            if (selectedOption) {
                orderCount ++;
                
                let selectedId = selectedOption.id + "Img";
                let selectedImg = document.getElementById(selectedId);
            
                // Show the selected image
                if (selectedImg) {
                    selectedImg.style.opacity = 1;
                    selectedImg.style.visibility = "visible";
                    menu.style.filter = "blur(1.5px)";
                    orderBtn.style.visibility = "hidden";
                    resolve(`Selected option: ${selectedOption.id}`);
                }
            } else {
                reject("No option is selected");
            }
        }, 4000);
    });

    orderProcessing.then((message) => {
        currentStatus.innerText = "Order Placed!";
        orderID.innerText = `Order id: ${orderCount}`;
        
    })
    .catch((error) => {
        currentStatus.innerText = "Error: " + error;
    })
});

// Function to hide order Div when click on newOrder button
function hideOrder(){
    orderDiv.forEach((Div)=>{
        Div.style.visibility = "hidden";
    });
};

// New Order{
newOrder.forEach((button)=>{
    button.addEventListener('click',function(){
        hideOrder();
        menu.style.filter = "none";
        orderBtn.style.visibility = "visible";
        currentStatus.innerText = "Order Status";
        let selectedOption = document.querySelector('input[name="menuOption"]:checked');
        if(selectedOption){
            selectedOption.checked = false;
        }

    })
})
