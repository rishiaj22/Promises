const card = document.querySelector("#card");
const cardDetails = document.querySelector("#cardDetails");
const remove_cardDetails = document.querySelector(".fa-solid");
const container = document.querySelector("#container");
const subcontainer = document.querySelector("#sub_cont");
const amount = document.querySelector("#amount");
const card_number = document.querySelector("#card_no");
const expiry = document.querySelector("#Expiry");
const cvv = document.querySelector("#cvv");
const form  = document.querySelector("form");
const success = document.querySelector("#success");
const returnbtn  = document.querySelector(".return");
const failed = document.querySelector("#failed");


// Function to rest form
function resetForm() {
    amount.value = "";
    expiry.value = "";
    card_number.value = "";
    cvv.value = "";
}

// Event listen for Card Details
card.addEventListener('click', function () {
    cardDetails.classList.add('active');
    container.style.filter = "blur(1px)";
});

remove_cardDetails.addEventListener('click', function () {
    cardDetails.classList.remove('active');
    container.style.filter = "none";
});

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    if (!card_number.value || !expiry.value || !cvv.value) {
        alert("Please fill the required field");
        return; 
    }
    console.log("Please Wait...");
    console.log(card_number.value);
    console.log(expiry.value);
    console.log(cvv.value);
    console.log(amount.value);
    let promise = new Promise(function(resolve,reject){
        container.style.display = "none";
        loading.style.display = "block";
        setTimeout(() => {
            if(card_number.value==78347353432 && expiry.value=='10/25' && cvv.value ==342){
                resolve({"Payment":true});
            }
            else{
                reject({"Payment":false});
            }
        }, 5000);
    });

    promise.then(function(accept){
        loading.style.display = "none";
        success.style.display = "block";    
    })
    .catch(function(error){
        failed.style.display = "block";
        success.style.display = "none";
        loading.style.display = "none";
    })
});

returnbtn.addEventListener('click',function(){
    success.style.display = "none";
    failed.style.display = "none";
    container.style.display = "block";
    resetForm();

});