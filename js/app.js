import * as UI from './interfaz.js';
import API from './api.js'

UI.formularioBuscar.addEventListener('submit', buscarCancion);


function buscarCancion(e) {
    e.preventDefault();

    //! obtener Datos del form
    const artista = document.querySelector('#artista').value;
    const cancion = document.querySelector('#cancion').value;

    if (artista === '' || cancion === '' ) {
        // Mostrar error
        UI.divMensajes.textContent = 'Error... Todos los campos son Obligatorios';
        UI.divMensajes.classList.add('error');

        setTimeout(() => {
            UI.divMensajes.textContent = '';
            UI.divMensajes.classList.remove('error');
        }, 3000);

        return;
    }

    const busqueda = new API(artista , cancion);
    busqueda.consultarAPI();
}