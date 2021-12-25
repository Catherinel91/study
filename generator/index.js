//«функция-генератор»
function* generatorStr(){
    yield "H";
    yield "E";
    yield "L";
    yield "L";
    yield "O";
}

// можно перебрать
for(let val of generatorStr()) {
    console.log(val)
}
const generator = generatorStr();  

const btn = document.querySelector(".btn");

//основной метода next() всегда (возвращает объект с value: значение из yield и done: false пока ф-ция не завершится)
btn.addEventListener("click", (e) => {
    let g = generator.next()
    if(g.done === false) {
        document.querySelector(".text").innerText += g.value;
    }  
})

//yield может передавать значение извне в генератор

function* gen() { 
    let ask = yield  "quetion1?"  
    console.log(ask) 
    let ask2 =  yield "quetion2?"  
    console.log(ask2) 
    let ask3 =  yield "quetion3?"  
    console.log(ask3) 
};

let generator2 = gen();

console.log(generator2.next().value)
console.log(generator2.next("ask").value)
console.log(generator2.next("ask2").value)
console.log(generator2.next("ask3").value)

