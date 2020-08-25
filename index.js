console.log (document)

//const elementosConLaEtiquetaP = document.getElementsByTagName ("p")
//const elelemtosConLaClaseVerde = document.getElementsByClassName ("verde")
//const elementosConElIDBordeRojo = document.getElementById ("borde-rojo")

//console.log (elementosConElIDBordeRojo)
//console.log (elelemtosConLaClaseVerde)
//console.log (elementosConLaEtiquetaP)

const parrafoVerde = document.getElementsByClassName ("verde")
parrafoVerde.classlist.remove("verde")

const parrafoRojo = document.getElementsByClassName ("rojo")
parrafoRojo.classlist.add("rosa")

const parrafoRosa = document.getElementsByClassName ("rosa")
parrafoRosa.classlist.toggle("rosa")

const parrafoAmarillo =document.getElementsByClassName ("amarillo")
console.log (parrafoAmarillo.classlist.contains ("rojo"))