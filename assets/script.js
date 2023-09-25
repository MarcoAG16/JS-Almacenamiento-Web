/*

API de almacenamiento web


Nos permite almacenar informacion en nuestro navegador, de dos formas:

    - local (persistencia de los datos)
    - sesion (los datos son volatiles)

    
Tanto el almacenamiento local como el de sesion, proporcionan un area privada para tratar sus datos, esto quiere decir que otros sitios web no pueden acceder a los datos que almacenamos.


*/

/*

Almacenamiento Local (localStorage)


La informacion que pongamos en un almacenamiento local se guarda indefinidiamente hasta que sea eliminada por codigo o borrada del navegador.

Casos de uso: articulos de un carrito de compras, guardamos un perfil de configuracion, historial de uso.


*/

//Guardando mi primer dato en localStorage

//LocalStorage.setItem (key, value)

localStorage.setItem("Nombre", "Felipe");
localStorage.setItem("Apellido","Maqueda");
localStorage.setItem("Edad","31");

//Guardando un carrito de compas

let carritoComprasFelipe = ["sabritones","cocaCola","Chicles","Tortillas"];

localStorage.setItem("carritoCompras", carritoComprasFelipe);

//Obtener la informacion almacenada en mi localStorage

//LocalStorage.getItem(key);
let apellido = localStorage.getItem("Apellido");
console.log(apellido);

//trallendo el carrito de compras
let carrito = localStorage.getItem("carritoCompras");
console.log(carrito);

//borrar un elemento del localStorage
//localStorage.removeItem(key)
localStorage.removeItem("carritoCompras");

//conocer el largo o longitud del localstorage.length

let longitudLocalStorage = localStorage.length;
console.log(longitudLocalStorage);

//para modificar datos con set
localStorage.setItem("apellido", "Gonzalez");