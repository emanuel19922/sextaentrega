// simulo que el se guarda en el local sttotange
//  agrego productos  array y los uso 
// una vez que pones el  la cantidad te imprime en pantalla 



let producto =[
    {id:1 ,producto:"huggies", precio:"2000$", imagen:"img/img.jpg"},
    {id:2 ,producto:"babysec", precio:"1200$", imagen:"img/img2.jpg"},
    {id:3, producto:"pampers", precio:"1000$", imagen:"img/img3.jpg"},
];
// simulo guardar el array en el localstorenge
const guardarenstorange = (clave,valor) =>{ localStorage.setItem(clave,valor)};
    guardarenstorange("listadeprod", JSON.stringify(producto));



// llamo a los datos almacenados lo recorro y lo guardo e el array que despues uso 
  const almasenados =JSON.parse(localStorage.getItem("listadeprod"));
  
  const productos= [];

  for (const objet of almasenados)
 productos.push( objet)

 const contenedor2 = document.querySelector( ".divprueba1")
for (const i of productos){
 
 const  contenedor= document.createElement("div")
contenedor.className = "divprueba"
contenedor.innerHTML= 
    `
    <div class="divcontenedor"> 
    <img class="img" src="${i.imagen}" alt="">
    
    <h3 class="producto"> producto :  ${i.producto}<\h3>
    <h2 class="precioproduc">precio: ${i.precio}</h2>
    <input class="cantidadprod" type="number">
     <button class="buton3" >enviar</button>
     </div>
`
contenedor2.appendChild(contenedor)
        
}             


  // aca le hago que haga click a todos los botons 
// genero una funcion(clickdebotton)
let boton= document.querySelectorAll(".buton3")
boton.forEach((boton2 )=> {
    boton2.addEventListener("click",clickdeboton)
    
});

function clickdeboton(e){
    const button = e.target;  
    // con el atributo closest ingreso al div por la clase y cuando oprimo el boton me envia el mas cercano 
    let boton2 = button.closest('.divprueba')
    let imgprins = boton2.querySelector(".img").src;
    let poductoss = boton2.querySelector(".producto").textContent;
    let precioprod = boton2.querySelector(".precioproduc").textContent;
     let cantidad = boton2.querySelector(".cantidadprod").value
      

cArrito( imgprins, poductoss,  cantidad, precioprod ) ;              
       
}
// aca lo pego en el carrito
const divpruebaparcarriro = document.querySelector(".divprueba2")
function cArrito(imgprins, poductoss,  cantidad, precioprod ){
  const divcarrrito =  document.createElement("div")
  divcarrrito.innerHTML= 
  `
  <div class="divcontenedo"> 
  <img class="img" src="${imgprins}" alt="">
  
  <h3 class="producto"> producto :  ${poductoss}<\h3>
  <h2 class="precioproduc">precio: ${precioprod}</h2>
  <h4>su cantidad es :${cantidad}</h4>
   <button class="buton3" >enviar</button>
   </div>
`
divpruebaparcarriro.appendChild(divcarrrito)
}













