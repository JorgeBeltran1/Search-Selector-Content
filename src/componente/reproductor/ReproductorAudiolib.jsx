import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './stilo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function RepAudLib() {
  const location = useLocation();
  const navigate = useNavigate();
  const { track } = location.state || {};

  if (!track) {
    return <div>No se encontraron datos.</div>;
  }

  return (
    <div className="container">
      <Button
        variant="primary"
        onClick={() => navigate('/')}
        className="circle-button"
      >
        <FontAwesomeIcon icon={faArrowLeft} className="icon-left" />
      </Button>
      <h2>Detalles del Audiolibro</h2>
      <table>
        <tbody>
          <tr>
            <th>Campo</th>
            <th>Información</th>
          </tr>
          <tr>
            <td><h3>Prueba de Audiolibro</h3></td>
            <td>
              <audio controls>
                <source src={track.previewUrl} type="audio/mp4" />
                Tu navegador no soporta el elemento de audio.
              </audio>
            </td>
          </tr>
          <tr>
            <td><strong>Tipo</strong></td>
            <td>{track.wrapperType}</td>
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
            <td><strong>URL del Artista</strong></td>
            <td><a href={track.artistViewUrl} target="_blank" rel="noopener noreferrer">Ver Artista</a></td>
          </tr>
          <tr>
            <td><strong>URL de la Colección</strong></td>
            <td><a href={track.collectionViewUrl} target="_blank" rel="noopener noreferrer">Ver Colección</a></td>
          </tr>
          <tr>
            <td><strong>Imagen del Libro</strong></td>
            <td><img src={track.artworkUrl100} alt="Imagen de la Colección" /></td>
          </tr>
          <tr>
            <td><strong>Precio de la Colección</strong></td>
            <td>${track.collectionPrice}</td>
          </tr>
          <tr>
            <td><strong>País</strong></td>
            <td>{track.country}</td>
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
            <td><strong>Descripción</strong></td>
            <td dangerouslySetInnerHTML={{ __html: track.description }}></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
