import React from 'react';

export default function VideoPlayer(track) {
  const videoUrl = "https://video-ssl.itunes.apple.com/itunes-assets/Video128/v4/be/ef/af/beefaffe-6278-4336-07a1-de180ddaeaf8/mzvf_1177979557611386379.640x468.h264lc.U.p.m4v";

  return (
    <div>
      <h3>Reproductor de Video</h3>
      <video controls width="640" height="468">
        <source src={videoUrl} type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
    </div>
  );
};


