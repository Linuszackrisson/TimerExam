import React from 'react';

function DigitalPage({ totalSeconds }) {
  // Beräkna minuter och sekunder från sekunder kvar
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return (
    <div className='digital-page'>
      {/* Visa tiden i formatet mm:ss */}
      <h2>{`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`}</h2>
    </div>
  );
}

export default DigitalPage;
