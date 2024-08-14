import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
import './stilo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function VideoPlayer() {
  const location = useLocation();
  const navigate = useNavigate();
  const { track } = location.state || {};

  const [showModal, setShowModal] = useState(false);

  if (!track) {
    return <div>No se encontraron datos.</div>;
  }

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  return (
    <div>
      <Button
        variant="primary"
        onClick={() => navigate('/')}
        className="circle-button"
      >
        <FontAwesomeIcon icon={faArrowLeft} className="icon-left" />
      </Button>
      <h2>Detalles del Video</h2>
      <table>
        <tbody>
          <tr>
            <th>Campo</th>
            <th>Valor</th>
          </tr>
          <tr>
            <td><strong>Corto del Video</strong></td>
            <td>
              <video controls width="300" height="200">
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
            <td><strong>URL del Track</strong></td>
            <td><a href={track.trackViewUrl} target="_blank" rel="noopener noreferrer">Ver Track</a></td>
          </tr>
          <tr>
            <td><strong>URL de la Colección</strong></td>
            <td><a href={track.collectionViewUrl} target="_blank" rel="noopener noreferrer">Ver Colección</a></td>
          </tr>
          <tr>
            <td><strong>Imagen (100x100)</strong></td>
            <td><img src={track.artworkUrl100} alt="Imagen del Track" /></td>
          </tr>
          <tr>
            <td><strong>Precio del Track</strong></td>
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
            <td><strong>Descripción Larga</strong></td>
            <td>
              <Button variant="info" onClick={handleShowModal}>
                Ver Descripción Completa
              </Button>
            </td>
          </tr>
        </tbody>
      </table>

      <Modal show={showModal} onHide={handleCloseModal} centered size="sm" className="custom-modal">
        <Modal.Header >
          <Modal.Title>Descripción Completa</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ maxHeight: '70vh', overflowY: 'auto' }}>
          <p>{track.longDescription}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
