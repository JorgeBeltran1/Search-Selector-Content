import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap'; // Importar Button de react-bootstrap
import './stilo.css'; // Asegúrate de tener estos estilos en tu archivo CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function RepAud() {
  const location = useLocation();
  const navigate = useNavigate();

  const { track } = location.state || {};

  if (!track) {
    return <div>No se encontraron datos.</div>;
  }

  // Función para truncar texto


  return (
    <div>
      <Button
        variant="primary"
        onClick={() => navigate('/')}
        className="circle-button"
      ><FontAwesomeIcon icon={faArrowLeft} className="icon-left" />
      </Button>
      <h2>Detalles del Musica</h2>
      <table>
        <tbody>
          <tr>
            <th>Campo</th>
            <th>Valor</th>
          </tr>
          <tr>
            <td><strong>Prueba de Música</strong></td>
            <td><audio controls>
              <source src={track.previewUrl} type="audio/mp4" />
              No se encuentra prueba de Música
            </audio></td>
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
            <td><strong>Nombre de la Colección</strong></td>
            <td>{track.collectionName}</td>
          </tr>
          <tr>
            <td><strong>Nombre de la Pista</strong></td>
            <td>{track.trackName}</td>
          </tr>
          <tr>
            <td><strong>URL del Artista</strong></td>
            <td><a href={track.artistViewUrl} target="_blank" rel="noopener noreferrer">Ver Artista</a></td>
          </tr>
          <tr>
            <td><strong>URL de la Colección</strong></td>
            <td><a href={track.collectionViewUrl} target="_blank" rel="noopener noreferrer">Ver Colección</a></td>
          </tr>
          <tr>
            <td><strong>URL de la Pista</strong></td>
            <td><a href={track.trackViewUrl} target="_blank" rel="noopener noreferrer">Ver Pista</a></td>
          </tr>
          <tr>
            <td><strong>URL de la Imagen (100x100)</strong></td>
            <td><img src={track.artworkUrl100} alt="Imagen de la Colección" /></td>
          </tr>
          <tr>
            <td><strong>Precio de la Colección</strong></td>
            <td>${track.collectionPrice}</td>
          </tr>
          <tr>
            <td><strong>Precio de la Pista</strong></td>
            <td>${track.trackPrice}</td>
          </tr>
          <tr>
            <td><strong>Fecha de Lanzamiento</strong></td>
            <td>{new Date(track.releaseDate).toLocaleDateString()}</td>
          </tr>
          <tr>
            <td><strong>Género Principal</strong></td>
            <td>{track.primaryGenreName}</td>
          </tr>
          <tr>
            <td><strong>País</strong></td>
            <td>{track.country}</td>
          </tr>
          <tr>
            <td><strong>Streamable</strong></td>
            <td>{track.isStreamable ? 'Sí' : 'No'}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
