import React, { Component, useRef, useEffect } from 'react';
import { render } from 'react-dom';
import './style.css';

// const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)
const useMountEffect = (fun) => useEffect(fun, []);

const useScroll = () => {
  const elRef = useRef(null);
  const executeScroll = () => elRef.current.scrollIntoView();

  return [executeScroll, elRef];
};

const ScrollDemo = () => {
  const [executeScroll, elRef] = useScroll();

  return (
    <>
      <button onClick={executeScroll}>red</button>
      {/* React.Fragment*/}
      <div style={{ height: 600 }} /> {/* just to demonstrate scroll*/}
      <div ref={elRef}>Element to scroll to</div>
      {/* Attach ref object to a dom element */}
      <div style={{ height: 1500 }} /> {/* just to demonstrate scroll*/}
      <button onClick={executeScroll}>Click to scroll </button>
      <div
        style={{ height: '500px', background: 'red', with: '100vw' }}
        ref={elRef}
      ></div>
      <div style={{ height: '500px', background: 'green' }}></div>
      <div style={{ height: '500px', background: 'blue' }}></div>
      <div style={{ height: '500px', background: 'yellow' }}></div>
      {/* Scroll on click */}
    </>
  );
};

render(<ScrollDemo />, document.getElementById('root'));
