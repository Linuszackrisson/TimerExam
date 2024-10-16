import React from 'react';

// Funktion som konverterar siffror till text
const numberToText = (num) => {
  const ones = [
    '', 'en', 'två', 'tre', 'fyra', 'fem', 'sex', 'sju', 'åtta', 'nio',
  ];
  const teens = [
    'tio', 'elva', 'tolv', 'tretton', 'fjorton', 'femton', 'sexton', 'sjutton', 'arton', 'nitton',
  ];
  const tens = [
    '', 'tio', 'tjugo', 'trettio', 'fyrtio', 'femtio', 'sextio',
  ];

  if (num < 10) return ones[num];
  if (num < 20) return teens[num - 10];
  if (num < 60) return tens[Math.floor(num / 10)] + (num % 10 > 0 ? ones[num % 10] : '');

  return ''; // Hantera numret om det är 60 eller mer (kan justeras om nödvändigt)
};

function TextPage({ totalSeconds }) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  // Bygg textrepresentationen
  const minuteText = numberToText(minutes);
  const secondText = numberToText(seconds);

  // Kontrollera om vi ska visa sekunder eller minuter
  if (totalSeconds < 60) {
    return (
      <div className='text-page'>
        <h2>{`${secondText} sekund${seconds !== 1 ? 'er' : ''}`}</h2> {/* Singular/plural för sekunder */}
      </div>
    );
  }

  return (
    <div className='text-page'>
      <h2>{`${minuteText}${minutes !== 0 ? ' minuter' : ''}${minutes > 0 && seconds > 0 ? ' och ' : ''}${secondText} sekund${seconds !== 1 ? 'er' : ''}`}</h2> 
    </div>
  );
}

export default TextPage;
