

function login(form){
    if (form.us.value=="pedro") {
        if (form.co.value=="123") {
            location="principal.html"
        } else {
            alert("Error de password")  
        }
    } else {
        alert("Error de Usuario")
    }
}

function formula() {
    let CantidadT = parseInt(document.getElementById('Cant').value)
    let Cantidad1 = parseInt(document.getElementById('C1').value)
    document.getElementById('C1').value = (Cantidad1+CantidadT)
}
formula()
function formula1(){
    let CantidadT=parseInt(document.getElementById('Cant').value)
    let Cantidad1=parseInt(document.getElementById('C1').value)
    document.getElementById('C1').value=(Cantidad1-CantidadT)
    
}


const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})