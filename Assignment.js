let Sum = document.getElementById('Sum')
let Num1 = document.getElementById('Num1')
let Num2 = document.getElementById('Num2')


function createTable(){
    Sum.innerHTML = ''
    if (Num1.value > Num2.value){
        alert('Invalid format, first input should be less than the second input')
    }else{
        for (let index = Num1.value; index <= Num2.value; index++){
            for (let i = 0; i <= 20; i++){
                Sum.innerHTML += `<p> ${index} x ${i} = ${index * i}</p>`
            }
        }
    }
}