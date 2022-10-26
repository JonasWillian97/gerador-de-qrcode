import { useState } from 'react';
import QRCode from 'react-qr-code';
import QrCodeLink from 'qrcode'
import './App.css';

function App() {

  const [link, setLink] = useState('');
  const [qrcodelink, setQrCodeLink] = useState('');

  function handleQrcod (e) {
    setLink(e.target.value);
  }

 

  return (
    <div className="container">

      <QRCode
      value={link} />

    <input className='input' placeholder='Digite sua URL...' value={link} onChange={(e)=> handleQrcod(e)} />
      
     
    </div>
  );
}

export default App;
