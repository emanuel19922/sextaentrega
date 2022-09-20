// simulo que el se guarda en el local sttotange
//  agrego productos  array y los uso 
// una vez que pones el  la cantidad te imprime en pantalla 
//  linea 118 uso operador ternario 


let producto = [
  { id: 1, producto: "Huggies", precio: "2000$", imagen: "img/img.jpg" },
  { id: 2, producto: "Babysec", precio: "1200$", imagen: "img/img2.jpg" },
  { id: 3, producto: "Pampers", precio: "1000$", imagen: "img/img3.jpg" },
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
    <h3 class="producto">${i.producto}<\h3>
   
    <p class="precioproduc">  ${i.precio}</p> 
   
     <button class="buton3" >enviar</button>
     
     </div>
`

  contenedor2.appendChild(contenedor)



  // const capturadecambio= contenedor.querySelector('.cantidadprod')

  // capturadecambio.addEventListener('change', capturadecambios);

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
  // let cantidad = boton2.querySelector(".cantidadprod").value




  cArrito(imgprins, poductoss, precioprod);



}

// aca lo pego en el carrito
// este lo traigo del html

const divpruebaparcarriro = document.querySelector(".divprueba2")

function cArrito(imgprins, poductoss, precioprod) {

  const Noduplicarcarrito = divpruebaparcarriro.getElementsByClassName('producto');


  for (let i = 0; i < Noduplicarcarrito.length; i++) {
    Noduplicarcarrito[i].textContent
    if (Noduplicarcarrito[i].textContent === poductoss) {
      // aca con parentnode hago que al agregar no se dulique en el carrito el mismo elemento
      // parent element si esta en el index y parent node si lo creamos con el dom
      let noduplicar = Noduplicarcarrito[i].parentNode.parentNode.querySelector('.cantidadprod');
      //  aca se suma la cantidad y y la funcion para sumar y return(retorne) para cortar y que se vuelva aejecutar
      noduplicar.value++;
      totalshopingcard()
      return;

    }


  }


  //  para multiplicar la cantidad por el precio y lo parseo
  // para acceder al boton de eliminar entramos a el div que lo contiene no a  document
  const divcarrrito = document.createElement("div")
  divcarrrito.className = "divcarrito"

  divcarrrito.innerHTML =
    `
  <div class="divcontenedo">

  
  <img class="img" src="${imgprins}" alt="">
  <h3 id="producto" class="producto">${poductoss}</h3>
  
  <p class="precioproduc">${precioprod}</p> 
 
  <input class="cantidadprod" type="number" value="1">
  <p class="precioproductotal">   </p> 
   <button class="buton3" >enviar</button>
   <button class="butoneliminar" >eliminar</button>
   </div>
`

  divpruebaparcarriro.appendChild(divcarrrito)


  // declaro la funcion para el boton eliminar y usarlo despues abajo 
  divcarrrito.querySelector('.butoneliminar').addEventListener('click', botoneliminar)
  divcarrrito.querySelector('.cantidadprod').addEventListener('change', botoncambiodecanmtidad)

  totalshopingcard()


}


function totalshopingcard() {
  let total = 0;
  let cardtotal = document.querySelectorAll('.divcarrito')
  cardtotal.forEach(cardtotal => {
    const totalprecio = cardtotal.querySelector('.precioproduc')

    const cardetotalprecios = Number(totalprecio.textContent.replace(
      '$',
      ''
    ))
    const cantidadtotal = cardtotal.querySelector('.cantidadprod')
    const cantidadtotalparse = Number(cantidadtotal.value)
    total = total + cardetotalprecios * cantidadtotalparse



  })


  totaldelcarritodecompras.innerHTML = `${total}
  <button value="enviar">enviar</button> `
}

const   totaldelcarritodecompras = document.querySelector('.divprueba3')




// cons esto lo que hacemos en eliminar los productosdel carrito 
function botoneliminar(e) {
  const botoneliminar = e.target;
  botoneliminar.closest('.divcarrito').remove();
  // aca pego la funcion para que sume y reeste 
  totalshopingcard()

}
// aca es la funciondee cambio de precio
function botoncambiodecanmtidad(e) {
  const cambiototal = e.target;
  if (cambiototal.value <= 0) {
    cambiototal.value = 1;
  }
  totalshopingcard()
}









