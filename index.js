console.log (document)

//const elementosConLaEtiquetaP = document.getElementsByTagName ("p")
//const elelemtosConLaClaseVerde = document.getElementsByClassName ("verde")
//const elementosConElIDBordeRojo = document.getElementById ("borde-rojo")

//console.log (elementosConElIDBordeRojo)
//console.log (elelemtosConLaClaseVerde)
//console.log (elementosConLaEtiquetaP)

const parrafoVerde = document.querySelector (".verde")
parrafoVerde.classList.remove("verde")
console.log (parrafoVerde)

const parrafoRojo = document.querySelector (".rojo")
parrafoRojo.classList.add("rosa")
console.log (parrafoRojo)

const parrafoRosa = document.querySelector (".rosa")
parrafoRosa.classList.toggle("rosa")
console.log (parrafoRosa)

const parrafoAmarillo =document.querySelector (".amarillo")
console.log (parrafoAmarillo.classList.contains ("rojo"))