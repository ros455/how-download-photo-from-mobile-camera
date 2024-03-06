import React, { useState } from 'react';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

function App() {
  const [photos, setPhotos] = useState([]);
  const [idealFacingMode, setIdealFacingMode] = useState('user'); // 'user' for front camera, 'environment' for back camera

  const handleTakePhotoAnimationDone = (dataUri) => {
    console.log('takePhoto');
    setPhotos((prevPhotos) => [...prevPhotos, dataUri]);
  };

  const switchCamera = () => {
    setIdealFacingMode((prevMode) => (prevMode === 'user' ? 'environment' : 'user'));
  };

  const handleDeletePhoto = (index) => {
    setPhotos((prevPhotos) => prevPhotos.filter((_, i) => i !== index));
  };
  const phoneNumber = "+1234567890";
  return (
    // <div>
    //   <div>
    //     <Camera
    //       onTakePhotoAnimationDone={handleTakePhotoAnimationDone}
    //       idealFacingMode={idealFacingMode}
    //     />
    //     <button onClick={switchCamera}>Switch Camera</button>
    //   </div>
    //   {photos.map((photo, index) => (
    //     <div key={index}>
    //       <img src={photo} alt={`Photo ${index}`} />
    //       <button onClick={() => handleDeletePhoto(index)}>Delete</button>
    //     </div>
    //   ))}
    // </div>
    <a href={`tel:${phoneNumber}`}>
    {/* <OutputADSvgSelector id={"phoneBlack"}/> */}
    <span>Подзвонити</span>
</a>
  );
}

export default App;
