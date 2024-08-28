// select landing page element 
let landingPge = document.querySelector(".landing-page");

// Get array of images
let imgsArray = ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg"];




// Get a Random Number 



setInterval(() => {

    let randomNumber = Math.floor(Math.random() * imgsArray.length);
   
// Change Background Image Url 
    landingPge.style.backgroundImage = "url('imgs/" + imgsArray[randomNumber] + "')"
}, 10000);