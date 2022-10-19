const whitePart = document.querySelector(".wrapper");
const generateBtn = document.querySelector(".form button");
const typingSpace = document.querySelector(".form input");
const codeImage  = document.querySelector(".qr-code img");




generateBtn.addEventListener("click", () => {
    let typingSpaceValue = typingSpace.value;
    if(!typingSpaceValue) return; //if input is empty, button returns code written below
    generateBtn.innerText = "QR code is been generated...";
    //getting a QR code of value typed by the user
    // by using a QR API
    codeImage.src = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${typingSpaceValue}`;
    codeImage.addEventListener("load", () => {
        whitePart.classList.add("active");
        generateBtn.innerText = "Generate QR code";
    });
});
typingSpace.addEventListener("keyup", () => {
    if(!typingSpace.value) {
        whitePart.classList.remove("active");
    }
});