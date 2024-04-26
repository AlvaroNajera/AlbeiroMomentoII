const usuarios = {
    "usuario1": "contraseña1",
};
let saldoCuenta = 100000;
//credenciales del usuario
function iniciarSesion(){
    let intentos = 0;
    while (intentos < 3){
        const opcion = prompt("Seleccione una opción:\n1. Iniciar sesión\n2. Registrar usuario\n3. Salir");
   
        switch (opcion) {
            case "1":
       
     const usuario = prompt("Ingrese Su Usuario");
    const contrasena = prompt("Ingrese Su Contraseña");
    
    // Verificar si el usuario y la contraseña son válidos
    if (usuarios[usuario] === contrasena) {
        alert("Inicio De Sesión Exitoso!");
        menuConsultasMovimientos();
        return;
    } else {
        intentos++;
        alert(`Intento ${intentos} de 3 ...😒 Intente Nuevamente  `);
    if (intentos === 3 ) {
        alert( "Su Cuenta Sera Bloqueada Por 24 Horas, Comunicate Con Tu Banco🤷‍♂️.")
        return
    }
    }
    break;

    case "2":
        const identificaion = prompt("Ingrese Su Identificacion");
        const nuevoUsuario = prompt("Ingrese un nuevo nombre de usuario:");
        const correo = prompt("Ingresa su correo electronico");
        const nuevaContrasena = prompt("Ingrese una nueva contraseña:");
        const repetirContraseña = prompt("Repite La Contraseña");
        usuarios[nuevoUsuario] = nuevaContrasena;
        alert("Usuario registrado correctamente...Bienvenido!");
        break;

        case "3":
            return; // Salir del menú de inicio de sesión
            break;

        default:
            alert("Opción no válida. Por favor, seleccione una opción válida.");
    }
}
alert("Ha excedido el número de intentos permitidos. La sesión se bloqueará.");
}
    // Llamar a la función principal para iniciar el programa
main();

// Función principal
function main() {
    while (true) {
        const opcion = prompt("Seleccione Una Opción:\n1. Iniciar sesión\n2. Salir");
        switch (opcion) {
            case "1":
                iniciarSesion();
                break;
            case "2":
                alert("¡Hasta Luego!");
                return;
            default:
                alert("Opción Inválida. Por Favor, Seleccione Una Opción Válida.");
        }
    }
}

// Llamar a la función principal para iniciar el programa
main();
// Función para el menú de consultas y movimientos
function menuConsultasMovimientos() {
    while (true) {
        const opcion = prompt("Consultas y Movimientos...\n1. Consultar saldo\n2. Consignar\n3. Consultar movimientos\n4. Retirar\n5. Salir");

        switch (opcion) {
            case "1":
                consultarSaldo();
                break;

            case "2":
                monto = parseFloat(prompt("Cuanto dinero desea consignar: "));
                consignar(monto);
                break;

            case "3":
                Movimientos();
                break;

            case "4":
                monto = parseFloat(prompt("Cuanto dinero desea retirar: "));
                retirar(monto);
                break;
            case "5":
                return; // Salir del menú de consultas y movimientos
                break;

            default:
                alert("Opción no válida. Por favor, seleccione una opción válida.");
        }
    }
}
// Función para realizar un retiro
function retirar(monto) {
    if (monto <= saldoCuenta) {
        saldoCuenta -= monto;
        alert(`Retiro exitoso. Saldo actual: $${saldoCuenta}`);
    } else {
        alert("Saldo insuficiente para realizar el retiro.");
    }
}

// Función para consultar el saldo
function consultarSaldo() {
    alert(`Saldo actual: $${saldoCuenta}`);
}

// Función para realizar una consignación
function consignar(monto) {
    if (monto > 0) {
        saldoCuenta += monto;
        alert(`Consignación exitosa. Saldo actual: $${saldoCuenta}`);
    } else {
        alert("Ingrese un monto válido para la consignación.");
    }
}

// Función para consultar movimientos
function consultarMovimientos() {
    // Obtener la fecha actual en formato legible
    
    let fechaActual = new Date().toLocaleDateString();

    let movimientos = [
        { fecha: fechaActual, descripcion: "Retiro",monto },
        { fecha: fechaActual, descripcion: "Consignación", monto },
    ];

    alert("Movimientos realizados:");
    movimientos.forEach((movimiento) => {
        alert(`Fecha: ${movimiento.fecha} + Descripción: ${movimiento.descripcion} + Monto: ${movimiento.monto}`);
    });
    consultarMovimientos();

}

// Ejemplo de uso:

