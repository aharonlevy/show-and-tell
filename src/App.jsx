import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NewPostArea from './components/NewPostArea';
import Post from './components/Post';


function App() {
  const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<div>

<Navbar/>
<NewPostArea/>
<div className='grid-container'>
  <Post />
</div>
<Footer/>
</div>);
}

export default App;
