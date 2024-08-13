import React from 'react';


export default function RepAud(track) {
    const audioUrl = "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/ec/6c/66/ec6c66ab-5f0b-0fcd-a653-cd9f7eb759c8/mzaf_14209309209223301447.plus.aac.p.m4a";

    return (
        <div>
      <h3>Reproductor de Audio</h3>
      <audio controls>
        <source src={audioUrl} type="audio/mp4" />
        Tu navegador no soporta el elemento de audio.
      </audio>
    </div>
      );
}  