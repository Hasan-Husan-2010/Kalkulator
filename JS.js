let form = document.querySelector('.form')
let inp = document.querySelector('.input')
let inp2 = document.querySelector('.input2')
let box  = document.querySelector('.box')
let p  = document.querySelector('.p')

form.addEventListener('submit', function(evt){
    evt.preventDefault('')
    let val = Number(inp.value) ;
    let val2 = Number(inp2.value) ;
    let a = val + val2;
    let b = val - val2;
    let c = val / val2;
    let d = val * val2;
    box.innerHTML = 
    "<div class='zit'>Yig`indi = " + a +  "</div> <div class='zip'> Ayirma = " + b + "</div>" +
    "<div class='zir'> Ko`paytma = " + d + "</div>" +
    "<div class='zii'> Bo`linma = " + c + "</div>" ;
})