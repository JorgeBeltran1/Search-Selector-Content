import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap'; // Importar Button de react-bootstrap
import './stilo.css'; // Asegúrate de tener estos estilos en tu archivo CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
export default function VideoPlayer() {
  const location = useLocation();
  const { track } = location.state || {};
  const navigate = useNavigate();
  if (!track) {
    return <div>No se encontraron datos.</div>;
  }

  return (
    <div>
      <Button
        variant="primary"
        onClick={() => navigate('/')}
        className="circle-button"
      ><FontAwesomeIcon icon={faArrowLeft} className="icon-left" />
      </Button>
      <h2>Detalles del Video</h2>
      <table>
        <tbody>
          <tr>
            <th>Campo</th>
            <th>Valor</th>
          </tr>
          <tr>
            <td><strong>Corto de Video</strong></td>
            <td> <video controls width="300" height="200">
              <source src={track.previewUrl} type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
            </td>
          </tr>
          <tr>
            <td><strong>Tipo</strong></td>
            <td>Música</td>
          </tr>
          <tr>
            <td><strong>Nombre del Artista</strong></td>
            <td>{track.artistName}</td>
          </tr>
          <tr>
            <td><strong>Nombre del Track</strong></td>
            <td>{track.trackName}</td>
          </tr>
          <tr>
            <td><strong>URL del Artista</strong></td>
            <td><a href={track.artistViewUrl} target="_blank" rel="noopener noreferrer">Ver Artista</a></td>
          </tr>
          <tr>
            <td><strong>URL del Pelicula</strong></td>
            <td><a href={track.trackViewUrl} target="_blank" rel="noopener noreferrer">Ver Track</a></td>
          </tr>
          <tr>
            <td><strong>Imagen </strong></td>
            <td><img src={track.artworkUrl100} alt="Imagen del Track" /></td>
          </tr>
          <tr>
            <td><strong>Precio de la Colección</strong></td>
            <td>${track.collectionPrice}</td>
          </tr>
          <tr>
            <td><strong>Precio de Pélicula</strong></td>
            <td>${track.trackPrice}</td>
          </tr>
          <tr>
            <td><strong>Fecha de Lanzamiento</strong></td>
            <td>{new Date(track.releaseDate).toLocaleDateString()}</td>
          </tr>
          <tr>
            <td><strong>Duración del Track</strong></td>
            <td>{(track.trackTimeMillis / 1000 / 60).toFixed(2)} minutos</td>
          </tr>
          <tr>
            <td><strong>País</strong></td>
            <td>{track.country}</td>
          </tr>
          <tr>
            <td><strong>Género Principal</strong></td>
            <td>{track.primaryGenreName}</td>
          </tr>
          <tr>
            <td><strong>Clasificación de Contenido</strong></td>
            <td>{track.contentAdvisoryRating}</td>
          </tr>
          <tr>
            <td><strong>Descripción Larga</strong></td>
            <td>{track.longDescription}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

