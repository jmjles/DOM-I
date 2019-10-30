
let second = 0;
let tsecond = 0;

let ms =  0;
let milisecond = 0;

const count = () =>{
    document.getElementById('secondTens').textContent = tsecond;
    document.getElementById('secondOnes').textContent = second;
    document.getElementById('msTens').textContent = milisecond;
    document.getElementById('msHundreds').textContent = ms;
    if (second === 10) {
        document.getElementById('secondTens').textContent = tsecond + 1 ;
        document.getElementById('secondOnes').textContent = second = 0;
        document.querySelectorAll('.digit').forEach((item)=> item.style.color= 'red')
        clearInterval(timer)
    }
    milisecond +=1;
    if (milisecond === 9){
        document.getElementById('msHundreds').textContent = ms + 1;
        milisecond=0;
        second+=1; 
   }
}
const timer = window.setInterval(() => {
    count();

}, 100);