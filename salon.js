let a = document.querySelector(".navbar")
let b = false

function ase(){
    if (!b) {
        a.style.height = "200px"
        b = true      
    }
    else{
        a.style.height = 0
        b = false
    }
}