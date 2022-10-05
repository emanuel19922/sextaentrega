
// const pedirpost = async()=>{

//   const resp = await
//   fetch('https://api.escuelajs.co/api/v1/products')
//   const data = await resp.json()

//   data.forEach((elemet) => {
//     productos.push(new producto(elemet.images[0],elemet.title,elemet.price) )

//   })
// }
// pedirpost()
const contenedor2 = document.querySelector(".divprueba1")
const pedirpost = async () => {
  const resp = await
    fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=10')
  const data = await resp.json()


  // .then(response =>  response.json())
  //   .then((data) => {


  data.forEach((elemet) => {
    const contenedor = document.createElement("div")
    contenedor.className = "divprueba"
    contenedor.innerHTML =
      `
        <div class="divcontenedor card style=width: 18rem;"> 
        <img class="img  card-img-top" src="${elemet.images[0]}" alt="">
        <h3 class="producto card-title">${elemet.title}</h3>
        <p>precio:</p>
        <p class="precioproduc card-text"> ${elemet.price}$</p> 
       
         <button class="buton3 btn btn-primary  " >enviar</button>
         
         </div>
    `



    contenedor2.appendChild(contenedor)

  })





  // const capturadecambio= contenedor.querySelector('.cantidadprod')

  // capturadecambio.addEventListener('change', capturadecambios);


  // aca le hago que haga click a todos los botons 
  // genero una funcion(clickdebotton)
  let boton = document.querySelectorAll(".buton3")

  boton.forEach((boton2) => {
    boton2.addEventListener("click", clickdeboton)

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
  });





}

pedirpost()


// aca lo pego en el carrito
// este lo traigo del html
// objeto constructor para almacenar en localstorange
const divpruebaparcarriro = document.querySelector(".divprueba2")



class todoslosprodcutos {
  constructor(imagen, producto, precio) {
    this.imagen = imagen;
    this.producto = producto;
    this.precio = precio;
  }

}
let carritolocalstorange = []


const Noduplicarcarrito = divpruebaparcarriro.getElementsByClassName('producto');


function cArrito(imgprins, poductoss, precioprod) {


  carritolocalstorange.push(new todoslosprodcutos(imgprins, poductoss, precioprod))

  // const guardarcarritoenlocal = (clave, valor) => { localStorage.setItem(clave, valor) };

  // guardarcarritoenlocal("lista", JSON.stringify(carritolocalstorange));

  // const recuperanDodatosdelcarrito = JSON.parse(localStorage.getItem("lista"))

  // const Productoparseado = []
  // console.log( Productoparseado)
  // for (const recuperardatos of recuperanDodatosdelcarrito) {

  //   Productoparseado.push(recuperardatos)
  // }
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
  let divcarrrito = document.createElement("div")
  divcarrrito.className = "divcarrito"

  divcarrrito.innerHTML =
    `
  <div class="divcontenedo card style=width: 18rem;">

  
  <img class="imgcarrito  card-img-top" src="${imgprins}" alt="">
  <h3 id="producto" class="producto card-title">${poductoss}</h3>
  
  <p class="precioproduc">${precioprod}</p> 
 
  <input class="cantidadprod" type="number" value="1">
 
   
   <button class="butoneliminar  btn btn-primary" >eliminar</button>
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
  let cantidadtotalparsecarrito = 0
  let cardtotal = document.querySelectorAll('.divcarrito')
  cardtotal.forEach(cardtotal => {
    const totalprecio = cardtotal.querySelector('.precioproduc')

    const cardetotalprecios = Number(totalprecio.textContent.replace(
      '$',
      ''
    ))

    const cantidadtotal = cardtotal.querySelector('.cantidadprod')
    //  de aca obtengo la cantidad de productos la recorro con el foreach y la pego con el inerhtml
    // aprovecho el foreach del total 
    const cantidadtotalparse = Number(cantidadtotal.value)
    cantidadtotalparsecarrito += cantidadtotalparse
    total = total + cardetotalprecios * cantidadtotalparse
    addLocalStorage()

  })

  const spambuttom = document.getElementById('spanbutton')

  spambuttom.innerHTML = `${cantidadtotalparsecarrito} item`
  const totaldelcarritodecompras = document.querySelector('.divprueba3')


  totaldelcarritodecompras.innerHTML = `
  <h1>Total: ${total} $</h1>   

  <button class="btnenviar   btn btn-primary">enviar</button> 
   `
  const btnenviar = document.querySelector('.btnenviar')
  btnenviar.addEventListener('click', comprarboton)

  addLocalStorage()


}
//cuando compro vacia el local storange con clear 
// aca hago la cliack al boton de comprar y borro su interior cuando pongo en comprar ycon l funcion de sumar totales se borra el total 
function comprarboton() {


  divpruebaparcarriro.innerHTML = ""

  totalshopingcard()
  localStorage.clear()
}



// aca pego lo que entra al carrito al local storange
function addLocalStorage() {
  localStorage.setItem('carrito', JSON.stringify(carritolocalstorange))

}



// parseo lo que guarde en el local storange si hay algo entra y lo pega en el carrito de arriba 
let storang = JSON.parse(localStorage.getItem('carrito'));

if (storang) {

  for (const carrito of storang) {
    const imagenlocal = carrito.imagen
    const productolocal = carrito.producto
    const precioprodlocal = carrito.precio

    cArrito(imagenlocal, productolocal, precioprodlocal)

  }

}




// cons esto lo que hacemos en eliminar los productosdel carrito 
function botoneliminar(e) {
  const botoneliminar = e.target;
  botoneliminar.closest('.divcarrito').remove();

  // aca pego la funcion para que sume y reeste 
  totalshopingcard()
  localStorage.clear()


}
// aca es la funciondee cambio de precio
function botoncambiodecanmtidad(e) {

  const cambiototal = e.target;
  if (cambiototal.value <= 0) {
    cambiototal.value = 1;
  }

  totalshopingcard()
}










// })