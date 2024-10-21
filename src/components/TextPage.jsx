import React from 'react';

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

  return ''; 
};

function TextPage({ secondsRemaining }) {
  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  const minuteText = numberToText(minutes);
  const secondText = numberToText(seconds);

  if (secondsRemaining < 60) {
    return (
      <div className='text-page'>
        <h2>{`${secondText} sekund${seconds !== 1 ? 'er' : ''}`}</h2> 
      </div>
    );
  }

  return (
    <div className='text-page'>
      <h2 className='textview-text'>{`${minuteText}${minutes !== 0 ? ' minuter' : ''}${minutes > 0 && seconds > 0 ? ' och ' : ''}${secondText} sekund${seconds !== 1 ? 'er' : ''}`}</h2> 
    </div>
  );
}

export default TextPage;
