import React, { useState } from 'react';
export default function TextForm(props) {
  const [text, setText] = useState('');
  //   text = "sdkdks"; wrong way to change the set
  // setText("sdsksks"); correct way to change the set

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleClearText = () => {
    let newText = '';
    setText(newText);
  };

  const handleCopyText = () => {
    let ctext = document.getElementById('exampleFormControlTextarea1');
    ctext.select();
    navigator.clipboard.writeText(ctext.value);
  };
  return (
    <>
      <div
        className='container'
        style={{
          color: props.mode === 'dark' ? 'white' : '#042743',
        }}
      >
        <h1>{props.heading}</h1>
        <div className='mb-3'>
          <textarea
            className='form-control'
            id='exampleFormControlTextarea1'
            rows='8'
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === 'dark' ? '#042743' : 'white',
              color: props.mode === 'dark' ? 'white' : '#042743',
            }}
          ></textarea>
        </div>
        <div className='btn btn-primary ' onClick={handleUpClick}>
          convert to Uppercase
        </div>
        <div className='btn btn-primary mx-2 ' onClick={handleLowClick}>
          convert to Lowercase
        </div>
        <div className='btn btn-primary mx-2 ' onClick={handleClearText}>
          clear
        </div>
        <div className='btn btn-primary mx-2 ' onClick={handleCopyText}>
          copy
        </div>
      </div>
      <div
        className='container my-5'
        style={{
          color: props.mode === 'dark' ? 'white' : '#042743',
        }}
      >
        <h2>Your text summary</h2>
        <p>
          {
            text.split(' ').filter(function (n) {
              return n !== '';
            }).length
          }{' '}
          words and {text.length} characters
        </p>
        <h2>Preview</h2>
        {text.length === 0 ? 'Enter something to preview' : text}
      </div>
    </>
  );
}
