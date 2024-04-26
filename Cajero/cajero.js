

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

function formula(){
    let CantidadT=parseInt(document.getElementById('Cant').value)
    let Cantidad1=parseInt(document.getElementById('C1').value)
    let Cantidad2=parseInt(document.getElementById('C2').value)
    document.getElementById('C1').value=(Cantidad1-CantidadT)
    document.getElementById('C2').value=(Cantidad2+CantidadT)
}

function formula2(){
    let CantidadT=parseInt(document.getElementById('Cant').value)
    let Cantidad1=parseInt(document.getElementById('C1').value)
    let Cantidad2=parseInt(document.getElementById('C2').value)
    document.getElementById('C1').value=(Cantidad1+CantidadT)
    document.getElementById('C2').value=(Cantidad2-CantidadT)
}

function formula3(){
    let CantidadT=parseInt(document.getElementById('Cant').value)
    let Cantidad1=parseInt(document.getElementById('C1').value)
    let Cantidad2=parseInt(document.getElementById('C2').value)
    document.getElementById('C1').value=(Cantidad1+CantidadT)
    
}

function formula4(){
    let CantidadT=parseInt(document.getElementById('Cant').value)
    let Cantidad1=parseInt(document.getElementById('C1').value)
    let Cantidad2=parseInt(document.getElementById('C2').value)
    document.getElementById('C2').value=(Cantidad2+CantidadT)
}

function formula5(){
    let CantidadT=parseInt(document.getElementById('Cant').value)
    let Cantidad1=parseInt(document.getElementById('C1').value)
    let Cantidad2=parseInt(document.getElementById('C2').value)
    document.getElementById('C1').value=(Cantidad1-CantidadT)
    
}

function formula6(){
    let CantidadT=parseInt(document.getElementById('Cant').value)
    let Cantidad1=parseInt(document.getElementById('C1').value)
    let Cantidad2=parseInt(document.getElementById('C2').value)
    document.getElementById('C2').value=(Cantidad2-CantidadT)
}