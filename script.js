let result = document.getElementById("res")

let one = document.getElementById("1")
let two = document.getElementById("2")
let three = document.getElementById("3")
let four = document.getElementById("4")
let five = document.getElementById("5")
let six = document.getElementById("6")
let seven = document.getElementById("7")
let eight = document.getElementById("8")
let nign = document.getElementById("9")
let del = document.getElementById("DEL")
let plus = document.getElementById("+")

let divi = document.getElementById("/")
let x = document.getElementById("X")
let reset = document.getElementById("RESET")
let mine = document.getElementById("-")
let eq = document.getElementById("=")

let num2 = document.createElement("div")
let realres = document.createElement("div")

del.addEventListener("click" ,()=>{
    let realres = ""
    result.innerText = ""

})



one.addEventListener("click", ()=>{
    realres = 1;
    result.innerText = realres

})

two.addEventListener("click", ()=>{
    realres = 2;
    result.innerText = realres
    
})
three.addEventListener("click", ()=>{
    realres = 3;
    result.innerText = realres
    
})
four.addEventListener("click", ()=>{
    realres = 4;
    result.innerText = realres
    
})
five.addEventListener("click", ()=>{
    realres = 5;
    result.innerText = realres
    
})
six.addEventListener("click", ()=>{
    realres = 6;
    result.innerText = realres
    
})
seven.addEventListener("click", ()=>{
    realres = 7;
    result.innerText = realres
    
})
eight.addEventListener("click", ()=>{
    realres = 8;
    result.innerText = realres
    
})
nign.addEventListener("click", ()=>{
    realres = 9;
    result.innerText = realres
    
})

plus.addEventListener("click", ()=>{

    let num2 = realres; 
    result.innerText = ""

    reset.addEventListener("click", ()=>{

    
        let realres = ""
        result.innerText = ""
    })
 
    eq.addEventListener("click", ()=>{
        let numF = num2 + realres
        result.innerText = numF
    })

})

mine.addEventListener("click", ()=>{

    let num2 = realres; 
    result.innerText = ""

    reset.addEventListener("click", ()=>{

    
        let realres = ""
        result.innerText = ""
    })
 
    eq.addEventListener("click", ()=>{
        let numF = num2 - realres
        result.innerText = numF
    })

})

divi.addEventListener("click", ()=>{

    let num2 = realres; 
    result.innerText = ""

    reset.addEventListener("click", ()=>{

    
        let realres = ""
        result.innerText = ""
    })
 
    eq.addEventListener("click", ()=>{
        let numF = num2 / realres
        result.innerText = numF
    })

})

x.addEventListener("click", ()=>{

    let num2 = realres; 
    result.innerText = ""

    reset.addEventListener("click", ()=>{

    
        let realres = ""
        result.innerText = ""
    })
 
    eq.addEventListener("click", ()=>{
        let numF = num2 * realres
        result.innerText = numF
    })

})
