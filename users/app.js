const url = 'https://jsonplaceholder.typicode.com/users';

var input = document.getElementById("buscar");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    buscar()
  }
});


function buscar() {
    console.log('buscando...')
    const valor = document.getElementById("buscar").value;
    console.log('Valor ingresado: '+valor)
    if (valor == '') {
        console.log('vacio')
    }else{
        usuarios(valor)
    }
}

function usuarios(valor) {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            data.forEach(usuario => {
                if (usuario.username == valor) {
                    console.log('nombre encontrado: '+ usuario.username)
                    mostrar(usuario)
                }
                else{
                    const msg = 'no encontrado';
                    console.log(msg)
                }
            });
        })
        .catch(err => console.log(err))
}

function mostrar(usuario) {
    const nombre = usuario.name
    const nombreDeUsuario= usuario.username
    const email= usuario.email
    const telefono= usuario.phone
    console.log('* * Mostrando datos.... * * ')
    console.log(nombre)
    console.log(nombreDeUsuario)
    console.log(email)
    console.log(telefono)
    //pintando
    const aplicacion = document.querySelector('.content');
    const par = document.getElementsByTagName('p')
    const pintarNombre = document.createElement('p')

    pintarNombre.innerHTML = '<hr>' +
        '<b>ID:</b>'+usuario.id+'<br>'+
        '<b>Nombre:</b> '+nombre+ '<br>' +
        '<b>Nombre de usuario:</b> ' + nombreDeUsuario + '<br>' +
        '<b>Correo electronico:</b> ' + email + '<br>' +
        '<b>Direccion:</b> '+usuario.address.street+ ', '
                            +usuario.address.suite+' - '
                            +usuario.address.city+'<br>'+ 
        '<b>Telefono:</b> ' + telefono + '<br>'+
        '<b>Sitio Web: </b>'+usuario.website+'<br>'+
        '<b>Compañía: </b>'+usuario.company.name+'<hr>';

    aplicacion.appendChild(pintarNombre)

}
