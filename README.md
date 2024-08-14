

# iTunes Search App

Este proyecto es una aplicación web basada en React que permite a los usuarios buscar música, películas y audiolibros utilizando la API de iTunes. La aplicación recupera y muestra los resultados de búsqueda en una tabla paginada, donde los usuarios pueden ver información detallada sobre cada ítem y acceder a vistas previas de los medios.

## Características

- **Funcionalidad de Búsqueda:** Los usuarios pueden buscar medios ingresando palabras clave y seleccionando tipos de medios (por ejemplo, Música, Película, Audiolibro).
- **Ordenación y Paginación:** Los resultados se muestran en una tabla ordenable y paginada.
- **Vistas Previas de Medios:** Los usuarios pueden ver vistas previas de videos, pistas de audio y detalles de audiolibros.
- **Diseño Responsivo:** La aplicación es responsiva y funciona bien tanto en dispositivos de escritorio como móviles.

## Estructura del Proyecto

- **`Pagina-busca.jsx`:** Componente principal que maneja la búsqueda, ordenación y paginación de los resultados de iTunes.
- **`ReproductorAudio.jsx`:** Componente para reproducir pistas de audio.
- **`ReproductorAudiolib.jsx`:** Componente para manejar la reproducción de audiolibros.
- **`ReproductorVideo.jsx`:** Componente para mostrar y reproducir vistas previas de videos.
- **`styles.css`:** Contiene los estilos para la aplicación, asegurando una interfaz de usuario consistente y responsiva.

## Instalación

Clona el repositorio:

```bash
git clone https://github.com/JorgeBeltran1/Search-Selector-Content/
```

Instala las dependencias:

```bash
npm install
```

Inicia el servidor de desarrollo:

```bash
npm start
```

La aplicación estará accesible en [http://localhost:3000](http://localhost:3000).

## Uso

- **Buscar:** Ingresa una palabra clave en la barra de búsqueda y selecciona el tipo de medio que deseas buscar.
- **Ordenar:** Haz clic en los encabezados de la tabla para ordenar los resultados por nombre del artista, fecha de lanzamiento, tipo de medio o nombre de la pista.
- **Paginar:** Utiliza los botones de paginación para navegar a través de los resultados.
- **Ver Detalles:** Haz clic en el botón "Más" para ver información detallada sobre un ítem específico, incluidas vistas previas de medios.

## Dependencias

- **React:** Biblioteca de JavaScript para construir interfaces de usuario.
- **React Bootstrap:** Para componentes de UI como tablas, botones y modales.
- **FontAwesome:** Para íconos utilizados en botones e indicadores de tipo de medio.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT.

