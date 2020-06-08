/**
 * Práctica 14
 * Modificar Imagen
 * Brian Passos
 */
'use strict';

const	elemento = {
			imagen: document.createElement ('img',),
			insertar: document.querySelector ('section .container figure')
		},
		zoomImagen = () => {
			elemento.imagen.src = 'img/Práctica02.png';
			elemento.insertar.appendChild(elemento.imagen);
			elemento.imagen.addEventListener ('click', () => {
				elemento.insertar.classList.toggle ('zoom');
				elemento.insertar.style.width = elemento.insertar.classList.contains ('zoom') ? '800px' : '128px';
			});
		};

zoomImagen ();
