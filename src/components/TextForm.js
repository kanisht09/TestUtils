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
    navigator.clipboard.writeText(text);
  };
  return (
    <>
      <div
        className='container'
        style={{
          color: props.mode === 'dark' ? '#adbac7' : '#22272e',
        }}
      >
        <h1 className='my-3'>{props.heading}</h1>
        <div className='mb-3'>
          <textarea
            className='form-control'
            id='exampleFormControlTextarea1'
            rows='8'
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === 'dark' ? '#22272e' : 'white',
              color: props.mode === 'dark' ? 'white' : '#22272e',
            }}
          ></textarea>
        </div>

        <button
          disabled={text.length === 0}
          className='btn btn-primary mx-1 my-1 '
          onClick={handleUpClick}
          style={{
            backgroundColor: props.mode === 'dark' ? '#22272e' : 'white',
            color: '#539bf5',
            borderColor: props.mode === 'dark' ? '#444c56' : '#539bf5',
          }}
        >
          UPPERCASE
        </button>
        <button
          disabled={text.length === 0}
          className='btn btn-primary mx-1 my-1 '
          onClick={handleLowClick}
          style={{
            backgroundColor: props.mode === 'dark' ? '#22272e' : 'white',
            color: '#539bf5',
            borderColor: props.mode === 'dark' ? '#444c56' : '#539bf5',
          }}
        >
          Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className='btn btn-primary mx-1 my-1'
          onClick={handleClearText}
          style={{
            backgroundColor: props.mode === 'dark' ? '#22272e' : 'white',
            color: '#539bf5',
            borderColor: props.mode === 'dark' ? '#444c56' : '#539bf5',
          }}
        >
          clear
        </button>
        <button
          disabled={text.length === 0}
          className='btn btn-primary mx-1 my-1'
          onClick={handleCopyText}
          style={{
            backgroundColor: props.mode === 'dark' ? '#22272e' : 'white',
            color: '#539bf5',
            borderColor: props.mode === 'dark' ? '#444c56' : '#539bf5',
          }}
        >
          copy
        </button>
      </div>
      <div
        className='container my-5'
        style={{
          color: props.mode === 'dark' ? '#adbac7' : '#22272e',
        }}
      >
        <h2>Your text summary</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
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
