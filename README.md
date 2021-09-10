# treble.ai D&D Test

## Features

- React 16
- Webpack 4
- Babel 7
- Diagramming editor

## Installation

- npm install
- npm start
- visit `http://localhost:8080/`

## Consideraciones

- En el branch **main** se incluye la implementación completa de todos los puntos propuestos en la prueba. Adicionalmente en el branch **original** se incluye la implementación de solo los dos primeros puntos, ya que estos se visualizan mejor con los nodos rectangulares y fondo blanco (como en los gifs compartidos en notion). Todo el código del branch **original** está también incluído en **main**.
- Originalmente se puede eliminar nodos seleccionados pulsando la tecla eliminar del teclado. Este comportamiento se ha deshabilitado en los nodos de Texto, pues como estos son editables, es posible usar la tecla de borrar para eliminar caracteres y permitir que borre el nodo generaría un comportamiento confuso. En nodos de imagenes se mantiene el comportamiento.
- En el figma adjunto no se incluye la 'x' para eliminar nodos, que si se encuentra disponible en el diseño original. Dado que es un elemento importante especialmente en nodos de texto, se conserva ajustandose al diseño. De ser necesario podría removerse facilmente.
- El diagrama serializado se almacena en localStorage, y este ha recibido algunas modificaciones. Por tanto es posible que se generen errores si se ha ejecutado una versión previa en el mismo navegador. Se recomienda limpiar el localStorage en devTools/Aplicación/Almacenamiento/borrar datos del sitio si se ha ejecutado una versión previa del programa.
