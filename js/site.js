/* Trabajo 1
alert("Ingrese la opcion del producto que desea llevar, para salir ingrese 0")
let seleccionarProductos = Number(prompt( "1-buzo $16000 2-remera $6000 3-jean $10000 4-Zapatillas $18000 "))
let seleccionarCantidad;
let total = 0;


const cantidad = (cant, precio) => {
  return cant * precio
}


while (seleccionarProductos != 0) {
  switch (seleccionarProductos) {
    case 1:
      seleccionarCantidad= Number(prompt("el producto seleccionado es buzo, indique la cantidad"))
            total += cantidad(seleccionarCantidad, 16000)
      break;
      case 2:
        seleccionarCantidad = Number(prompt("el producto seleccionado es remera, indique la cantidad"))
        total += cantidad(seleccionarCantidad, 6000)
      break;
    case 3:
      seleccionarCantidad = Number(prompt("el producto seleccionado es jean, indique la cantidad"))
      total += cantidad(seleccionarCantidad, 10000)
    break;
    case 4:
      seleccionarCantidad = Number(prompt("el producto seleccionado es Zapatillas, indique la cantidad"))
      total += cantidad(seleccionarCantidad, 18000)
    break;

    default:
      break;
  }
  seleccionarProductos = Number(prompt( "1-buzo $16000 2-remera $6000 3-jean $10000 4-Zapatillas $18000 "))
}

alert("el total de la compra es de: " + total)


const envio = () => {
    if (total >= 10000) {
      alert("El envio es gratuito")
    }else{
      total += 1000
      alert("el costo de envio es de 1000, el total es: " + total)
    }
}

envio() 

const metodoDePago = () => {
  let metodo = prompt("ingrese el metodo de pago, tarjeta o efectivo")
  if (metodo == "tarjeta") {
    total *= 1.1
    console.log(total);
  }else if ( metodo == "efectivo") {
    total -= 1000
    alert("tenes un descuento de 1000, el total es:" + total)
  }

  
}

metodoDePago() */

/* Trabajo 2 */
class Cliente {
  constructor(nombre, apellido, dni, saldo) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.dni = dni;
      this.saldo = saldo;
  }
}

const clienteSamuel = new Cliente("Enrique", "Saenz", 12345678, 1000);
const clienteJuan = new Cliente("Pepe", "Gomez", 12345678, 2000);
const clienteMaria = new Cliente("Leonel", "Messi", 12345678, 3000);
const clientePedro = new Cliente("Leandro", "Paez", 12345678, 4000);

const arrayClientes = [];

arrayClientes.push(clienteSamuel);
arrayClientes.push(clienteJuan);
arrayClientes.push(clienteMaria);
arrayClientes.push(clientePedro);

console.log(arrayClientes);

function menu() {
  alert("Bienvenido");
  let opcion = parseInt(prompt("Ingrese una opción: \n 1) Alta de cliente \n 2) Baja de cliente \n 3) Modificación de cliente \n 4) Consulta de cliente \n 5) Salir"));
  return opcion;
}

function altaCliente() {
  let nombre = prompt("Ingrese el nombre del cliente: ");
  let apellido = prompt("Ingrese el apellido del cliente: ");
  let dni = parseInt(prompt("Ingrese el DNI del cliente: "));
  let saldo = parseInt(prompt("Ingrese el saldo del cliente: "));
  let cliente = new Cliente(nombre, apellido, dni, saldo);
  arrayClientes.push(cliente);
  console.log(arrayClientes);
}

function bajaCliente() {
  let dni = parseInt(prompt("Ingrese el DNI del cliente: "));
  let cliente = arrayClientes.find(cliente => cliente.dni === dni);
  let indice = arrayClientes.indexOf(cliente);
  arrayClientes.splice(indice, 1);
  console.log(arrayClientes);
}

function modificacionCliente() {
  let dni = parseInt(prompt("Ingrese el DNI del cliente: "));
  let cliente = arrayClientes.find(cliente => cliente.dni === dni);
  let indice = arrayClientes.indexOf(cliente);
  let nombre = prompt("Ingrese el nombre del cliente: ");
  let apellido = prompt("Ingrese el apellido del cliente: ");
  let saldo = parseInt(prompt("Ingrese el saldo del cliente: "));
  let clienteModificado = new Cliente(nombre, apellido, dni, saldo);
  arrayClientes.splice(indice, 1, clienteModificado);
  console.log(arrayClientes);
}

function consultaCliente() {
  let dni = parseInt(prompt("Ingrese el DNI del cliente: "));
  let cliente = arrayClientes.find(cliente => cliente.dni === dni);
  console.log(cliente);
}

function salir() {
  alert("Gracias por elegirnos");
}

let opcion = menu();
switch (opcion) {
  case 1:
      altaCliente();
      break;
  case 2:
      bajaCliente();
      break;
  case 3:
      modificacionCliente();
      break;
  case 4:
      consultaCliente();
      break;
  case 5:
      salir();
      break;
  default:
      alert("Opción incorrecta");
      break;
}