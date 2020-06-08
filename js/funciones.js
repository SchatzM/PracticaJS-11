/**
 * Práctica 14
 * Modificar Imagen
 * Brian Passos
 */
'use strict';

const	elemento = { // Objeto con referencia a los elementos que usaremos
			imagen: document.createElement ('img'), // Creamos el elemento para la imagen
			insertar: document.querySelector ('section .container figure') // Elemento donde insertaremos el elemento de imagen anterior creado
		},
		zoomImagen = () => { // Función que alterna zoom en la imagen
			elemento.imagen.src = 'img/Práctica02.png'; // Agregamos el source de la imagen al elemento
			elemento.insertar.appendChild(elemento.imagen); // Añadimos el elemento de imagen al figure dentro de section
			elemento.imagen.addEventListener ('click', () => { // Función ejecutada al hacer clic sobre la imagen
				elemento.insertar.classList.toggle ('zoom'); // Alternamos la clase 'zoom' sobre el elemento que contiene la imagen para identificar el estado del zoom
				elemento.insertar.style.width = elemento.insertar.classList.contains ('zoom') ? '800px' : '128px'; // Alternamos el ancho del elemento que contiene la imagen dependiendo de si la clase 'zoom' antes mencionada existe o no
			});
		};

zoomImagen (); // Llamamos a la función principal
