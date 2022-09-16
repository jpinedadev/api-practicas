const aplicacion = document.querySelector('.container')
const url = 'https://jsonplaceholder.typicode.com/users'

fetch(url)
    .then(res => res.json())
    .then(data =>{
        data.forEach(usuario => {
            console.log(usuario.name)
            const p = document.createElement('p')
            p.setAttribute('id', usuario.id)
            p.innerHTML = usuario.name
            p.addEventListener('click', function(){
                window.location.href = `./usuario.html?id=${usuario.id}`
            })
            aplicacion.appendChild(p)
        });
    })
