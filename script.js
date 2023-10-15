
const API = 'https://api.adviceslip.com/advice';
const quote_id = document.getElementById('quote_id');
const quote_advice = document.getElementById('quote_advice');


async function generateQuote(){
    try{
        const response = await fetch(API);
        if(!response){
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const quote = await response.json();
        quote_id.innerHTML = quote.slip.id;
        quote_advice.innerHTML = quote.slip.advice;
    }catch(error){
        console.log(error);
    }
}

function changeImageSource() {
    const dividerImage = document.getElementById('divider-image');
    if (window.innerWidth >= 480) {
      dividerImage.src = './images/pattern-divider-desktop.svg';
    } else {
      dividerImage.src = './images/pattern-divider-mobile.svg';
    }

}

changeImageSource();

  
window.addEventListener('resize', changeImageSource);

