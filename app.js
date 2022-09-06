// simulo que el se guarda en el local sttotange
//  agrego productos  array y los uso 
// una vez que pones el  la cantidad te imprime en pantalla 
//  linea 118 uso operador ternario 


let producto = [
  { id: 1, producto: "huggies", precio: "2000$", imagen: "img/img.jpg" },
  { id: 2, producto: "babysec", precio: "1200$", imagen: "img/img2.jpg" },
  { id: 3, producto: "pampers", precio: "1000$", imagen: "img/img3.jpg" },
];



// simulo guardar el array en el localstorenge
const guardarenstorange = (clave, valor) => { localStorage.setItem(clave, valor) };
guardarenstorange("listadeprod", JSON.stringify(producto));



// llamo a los datos almacenados lo recorro y lo guardo e el array que despues uso 
const almasenados = JSON.parse(localStorage.getItem("listadeprod"));

const productos = [];
console.log(...productos)

for (const objet of almasenados)
  productos.push(objet)

const contenedor2 = document.querySelector(".divprueba1")
for (const i of productos) {

  
  
   

  const contenedor = document.createElement("div")
  contenedor.className = "divprueba"
  contenedor.innerHTML =
    `
    <div class="divcontenedor"> 
    <img class="img" src="${i.imagen}" alt="">
    <h3 class="producto"> producto :  ${i.producto}<\h3>
    <h2 > precio producto:</h2>
    <p class="precioproduc">  ${i.precio}</p> 
    <input class="cantidadprod" type="number">
     <button class="buton3" >enviar</button>
     </div>
`
  contenedor2.appendChild(contenedor)
}

// aca le hago que haga click a todos los botons 
// genero una funcion(clickdebotton)
let boton = document.querySelectorAll(".buton3")
boton.forEach((boton2) => {
  boton2.addEventListener("click", clickdeboton)


});

function clickdeboton(e) {
  const button = e.target;
  
  // con el atributo closest ingreso al div por la clase y cuando oprimo el boton me envia el mas cercano 
  let boton2 = button.closest('.divprueba')
  let imgprins = boton2.querySelector(".img").src;
  let poductoss = boton2.querySelector(".producto").textContent;
  let precioprod = boton2.querySelector(".precioproduc").textContent;
  let cantidad = boton2.querySelector(".cantidadprod").value
  if (cantidad === "" || cantidad === "0"){
   
    swal({
      title: "El campo esta vacio",
      text: "AGREGE UNA CANTIDAD",
      icon: "warning",
      button: "aceptar",
     
    });
  }


 
  cArrito(imgprins, poductoss, cantidad, precioprod);
  
}



// aca lo pego en el carrito
const divpruebaparcarriro = document.querySelector(".divprueba2")

function cArrito(imgprins, poductoss, cantidad, precioprod) {

  // propiedad replace me permite sacar el signo de $ para tranformarlo en number y sumarlo
  let tot = Number(precioprod.replace(
    '$',
    ''

  ))
  let totalparcial = tot * cantidad
  //  para multiplicar la cantidad por el precio y lo parseo
  // para acceder al boton de eliminar entramos a el div que lo contiene no a  document
  const divcarrrito = document.createElement("div")
  divcarrrito.className = "divcarrito"

  divcarrrito.innerHTML =
    `
  <div class="divcontenedo"> 
  <img class="img" src="${imgprins}" alt="">
  <h3 class="producto"> ${poductoss}<\h3>
  <input class="cantidadprod" type="number">
  <h2 class="precioproductos">total: ${totalparcial}</h2>
   <button class="buton3" >enviar</button>
   <button class="butoneliminar" >eliminar</button>
   </div>
`



  // boton eliminminar 
  // para acceder al boton de eliminar entramos a el div que lo contiene no a  document con queryselector
  let botonelimina = divcarrrito.querySelector('.butoneliminar')
  botonelimina.addEventListener('click', botoneliminar)
  function botoneliminar(e) {
    let clickcarrito = e.target

    let clickcarritototal = clickcarrito.closest('.divcarrrito')


  }
 

  // con el evento change entro al div contenedor y me captura cuando se realice un cambio dentro de ese div / o cualquier cosa 
  let Sacaryponer = divcarrrito.querySelector('.cantidadprod')
  Sacaryponer.addEventListener('change', capturacambio)
  function capturacambio(e) {
    let eliminacantidad = e.target

    //  operadoor ternario
    eliminacantidad.value <= 0 ? (eliminacantidad.value = 1) : null;
let totaldecarrito = eliminacantidad.value * tot
console.log(totaldecarrito)
let preciotatlconcambios = divcarrrito.querySelector('.precioproductos')
 preciotatlconcambios.innerHTML=`${totaldecarrito}`
// const totalCarrito = ca
    // let cantidaprodCarrito = cantidadprod
    



  }

  divpruebaparcarriro.appendChild(divcarrrito)

}

 









