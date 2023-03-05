setInterval(setClock,1000)

const hourHand=document.querySelector('[data-hour-hand]')
const minHand=document.querySelector('[data-minute-hand]')
const secHand=document.querySelector('[data-sec-hand]')

function setClock()
{
    const currentDate=new Date();
    const secRatio=currentDate.getSeconds()/60;
    const minRatio=(secRatio + currentDate.getMinutes())/60;
    const houRatio=(minRatio + currentDate.getHours())/12;
    setRotate(secHand,secRatio);
    setRotate(minHand,minRatio);
    setRotate(hourHand,houRatio);
}

function setRotate(element , rotationRatio)
{
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock();

