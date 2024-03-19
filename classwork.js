let outss = document.getElementById('Num')

function Multiply(){
    console.log(document.getElementById('input').value);
    for(let k = 1; k <= 20; k++){
        let named = (k) ;
        console.log(k);
        outss.innerHTML += `<h1> ${input.value} * ${k} = ${input.value * k}`;
    }
}