import React from 'react';

function DigitalPage({ secondsRemaining }) {
  // Beräkna minuter och sekunder från sekunder kvar
  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  return (
    <div className='digital-page'>
      <h2 className='digital-clock'>{`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`}</h2>
    </div>
  );
}

export default DigitalPage;
