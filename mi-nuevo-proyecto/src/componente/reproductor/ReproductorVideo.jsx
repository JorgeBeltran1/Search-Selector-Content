import React from 'react';
import { useLocation } from 'react-router-dom';

export default function VideoPlayer() {
  const location = useLocation();
  const { track } = location.state || {};

  return (
    <div>
      <h3>Reproductor de Video</h3>
      <video controls width="640" height="468">
        <source src={track.previewUrl} type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
    </div>
  );
}



