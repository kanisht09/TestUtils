import { useState } from 'react/cjs/react.development';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  const [mode, setMode] = useState('light');
  // #2d333b
  const toggleClick = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#22272e';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title='TextUtils'
          mode={mode}
          toggleClick={toggleClick}
        ></Navbar>

        <div className='container mt-5'>
          <Routes>
            <Route
              exact
              path='/'
              element={
                <TextForm
                  heading='Enter the text to analyse below'
                  mode={mode}
                />
              }
            />
            <Route exact path='/about' element={<About mode={mode} />} />
          </Routes>
          {/* <About /> */}
        </div>
      </Router>
    </>
  );
}
export default App;
