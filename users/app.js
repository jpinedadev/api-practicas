const url = 'https://jsonplaceholder.typicode.com/users';

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
    const aplicacion = document.querySelector('.container');
    const pintarNombre = document.createElement('p')
    pintarNombre.innerHTML = '<b>Nombre:</b> '+nombre;
    aplicacion.appendChild(pintarNombre)

    const pintarNombreDeUsuario = document.createElement('p')
    pintarNombreDeUsuario.innerHTML = '<b>Nombre de usuario:</b> ' + nombreDeUsuario;
    aplicacion.appendChild(pintarNombreDeUsuario)

    const pintarEmail = document.createElement('p')
    pintarEmail.innerHTML = '<b>Correo electronico:</b> ' + email;
    aplicacion.appendChild(pintarEmail)

    const pintarTelefono = document.createElement('p')
    pintarTelefono.innerHTML = '<b>Telefono:</b> ' + telefono;
    aplicacion.appendChild(pintarTelefono)

}
