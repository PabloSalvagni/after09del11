let formulario = document.getElementById('formulario')
let tabl = document.getElementById('tablaContent')


const datos = {

    name: "",
    lastname: "",
    id: ""

}

formulario.addEventListener( 'submit' , (e) => {

    e.preventDefault();
    datos.name = document.getElementById('fname').value;
    datos.lastname = document.getElementById('lname').value;
    datos.id = document.getElementById('identificacion').value;
    console.log(datos);

})