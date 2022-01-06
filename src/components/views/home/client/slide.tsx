import React from 'react';

const Slide = ({index}: {index: number}) => (
  <div
    style={{
      border: '1px solid #ccc',
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      fontSize: 30,
      justifyContent: 'space-between',
    }}
  >
    <a
      href={`https://picsum.photos/200/200?i=${index}`}
      target='_blank'
      rel='noreferrer'
    >
      <img
        src={`https://picsum.photos/200/200?i=${index}`}
        alt='random'
        title='random'
      />
    </a>
    {index}
  </div>
);

export default Slide;
