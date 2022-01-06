/* eslint-disable react/no-array-index-key */

import React from 'react';

import ReactWindowCarousel from './ReactWindowCarousel';
import Slide from './slide';

export default function HomeView() {
  const slideWidth = 200;
  const slideHeight = 250;

  const initialSlide = 0;

  const slidesList = new Array(5000)
    .fill(0)
    .map((i, index) => <Slide key={index} index={index} />);

  return (
    <div className='App'>
      <h1>React virtual carousel with 5000 elements</h1>
      <h2>Move with touch or drag</h2>
      <div style={{width: '95%', margin: '0 auto'}}>
        <ReactWindowCarousel
          {...{initialSlide, slidesList, slideWidth, slideHeight}}
        />
      </div>
      <p>No extra library used, just Reactjs and plain JS </p>
    </div>
  );
}
