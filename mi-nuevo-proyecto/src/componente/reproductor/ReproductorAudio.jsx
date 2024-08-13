import React from 'react';
import { useLocation } from 'react-router-dom';

export default function RepAud() {
  const location = useLocation();
  const { track } = location.state || {};
console.log('====================================');
console.log(track);
console.log('====================================');
  return (
    <div>
      <h3>Reproductor de Audio</h3>
      <audio controls>
        <source src={track.previewUrl} type="audio/mp4" />
        Tu navegador no soporta el elemento de audio.
      </audio>
    </div>
  );
}
