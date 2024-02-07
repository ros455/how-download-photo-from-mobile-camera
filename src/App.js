// import logo from './logo.svg';
// import './App.css';

// function App() {
//   const handleFileInput = () => {
//     const inputElement = document.getElementById('cameraInput');
//     inputElement.click();
//   };

//   const handleCameraInput = () => {
//     // Тут ви можете додати код для взаємодії з камерою на телефоні
//     alert('Відкрито камеру!');
//   };

//   return (
//     <div className="App">
//       <input type='file'/>
//       <input type='file' accept="image/*" style={{ display: 'none' }} id="cameraInput" onChange={handleCameraInput}/>
//       <button onClick={handleFileInput}>Відкрити камеру</button>
//     </div>
//   );
// }

// export default App;


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   const handleCameraInput = async () => {
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//       // Тут ви можете використовувати отриманий потік (stream)
//       alert('Камера відкрита!');
//     } catch (error) {
//       console.error('Помилка при відкритті камери:', error);
//     }
//   };

//   return (
//     <div className="App">
//       <button onClick={handleCameraInput}>Відкрити камеру</button>
//     </div>
//   );
// }

// export default App;


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   const handleCameraInput = async () => {
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//       const videoElement = document.getElementById('cameraVideo');

//       // Встановлюємо відеопотік у відеоелемент
//       videoElement.srcObject = stream;

//       // Починаємо відтворення відео
//       videoElement.play();
//     } catch (error) {
//       console.error('Помилка при відкритті камери:', error);
//     }
//   };

//   return (
//     <div className="App">
//       <button onClick={handleCameraInput}>Відкрити камеру</button>
//       <video id="cameraVideo" width="640" height="480" autoPlay></video>
//     </div>
//   );
// }

// export default App;


// import { useState } from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   const [photoSrc, setPhotoSrc] = useState(null);

//   const handleCameraInput = async () => {
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//       const videoElement = document.getElementById('cameraVideo');

//       // Встановлюємо відеопотік у відеоелемент
//       videoElement.srcObject = stream;

//       // Очікуємо, коли відеопотік буде готовий до відтворення
//       videoElement.onloadedmetadata = () => {
//         videoElement.play();

//         // Створюємо елемент canvas для обробки зображення
//         const canvasElement = document.createElement('canvas');
//         canvasElement.width = videoElement.videoWidth;
//         canvasElement.height = videoElement.videoHeight;
//         const canvasContext = canvasElement.getContext('2d');

//         // Очікуємо кадр відео та копіюємо його на canvas
//         videoElement.addEventListener('loadeddata', () => {
//           canvasContext.drawImage(videoElement, 0, 0, canvasElement.width, canvasElement.height);
//           const photoDataUrl = canvasElement.toDataURL('image/jpeg'); // отримуємо base64-представлення фото
//           setPhotoSrc(photoDataUrl); // встановлюємо фото в стан компонента
//           stream.getTracks().forEach(track => track.stop()); // зупиняємо відеопотік
//         });
//       };
//     } catch (error) {
//       console.error('Помилка при відкритті камери:', error);
//     }
//   };

//   return (
//     <div className="App">
//       <button onClick={handleCameraInput}>Відкрити камеру</button>
//       <video id="cameraVideo" width="640" height="480" style={{ display: photoSrc ? 'none' : 'block' }}></video>
//       {photoSrc && <img src={photoSrc} alt="Зображення з камери" />}
//     </div>
//   );
// }

// export default App;


//------------react-webcam


// import logo from './logo.svg';
// import './App.css';
// import Webcam from "react-webcam";

// const videoConstraints = {
//   width: 1280,
//   height: 720,
//   facingMode: "user"
// };

// function App() {

//   return (
//     <div className="App">
//   <Webcam
//     audio={false}
//     height={720}
//     screenshotFormat="image/jpeg"
//     width={1280}
//     videoConstraints={videoConstraints}
//   >
//     {({ getScreenshot }) => (
//       <button
//         onClick={() => {
//           const imageSrc = getScreenshot()
//         }}
//       >
//         Capture photo
//       </button>
//     )}
//   </Webcam>
//     </div>
//   );
// }

// export default App;


// import React, { useRef, useCallback } from "react";
// import Webcam from "react-webcam";

// const videoConstraints = {
//   width: 1280,
//   height: 720,
//   facingMode: "user"
// };

// function App() {
//   const webcamRef = useRef(null);

//   const capture = useCallback(() => {
//     const imageSrc = webcamRef.current.getScreenshot();
//     // Додайте код для відображення отриманого фото на сайті або збереження його.
//     // Наприклад, можна використати стан або інші методи для збереження та відображення фото.
//     console.log("Captured image:", imageSrc);
//   }, []);

//   return (
//     <div className="App">
//       <Webcam
//         audio={false}
//         height={720}
//         screenshotFormat="image/jpeg"
//         width={1280}
//         videoConstraints={videoConstraints}
//         ref={webcamRef}
//       />
//       <button onClick={capture}>Capture photo</button>
//     </div>
//   );
// }

// export default App;


//-----------react-html5-camera-photo


// import logo from './logo.svg';
// import './App.css';

// function App() {


//   return (
//     <div className="App">

//     </div>
//   );
// }

// export default App;


// import React from 'react';
// import Camera from 'react-html5-camera-photo';
// import 'react-html5-camera-photo/build/css/index.css';

// function App (props) {
//   function handleTakePhoto (dataUri) {
//     // Do stuff with the photo...
//     console.log('takePhoto');
//   }

//   return (
//     <Camera
//       onTakePhoto = { (dataUri) => { handleTakePhoto(dataUri); } }
//     />
//   );
// }

// export default App;

//-------------------

// import React, { useState } from 'react';
// import Camera from 'react-html5-camera-photo';
// import 'react-html5-camera-photo/build/css/index.css';

// function App (props) {
//   const [dataUri, setDataUri] = useState('');

//   function handleTakePhotoAnimationDone (dataUri) {
//     console.log('takePhoto');
//     setDataUri(dataUri);
//   }

//   console.log('dataUri',dataUri);

//   const isFullscreen = false;
//   return (
//     <div>
//       {
//         (dataUri)
//           ? 
//           // <img src='./logo192.png'/>
//           <img src={dataUri} alt="Base64 Image" />
//           : <Camera onTakePhotoAnimationDone = {handleTakePhotoAnimationDone}
//             isFullscreen={isFullscreen}
//           />
//       }
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

function App() {
  const [dataUri, setDataUri] = useState('');
  const [idealFacingMode, setIdealFacingMode] = useState('user'); // 'user' for front camera, 'environment' for back camera

  function handleTakePhotoAnimationDone(dataUri) {
    console.log('takePhoto');
    setDataUri(dataUri);
  }

  const isFullscreen = false;

  const switchCamera = () => {
    setIdealFacingMode((prevMode) => (prevMode === 'user' ? 'environment' : 'user'));
  };

  return (
    <div>
      {dataUri ? (
        <img src={dataUri} alt="Base64 Image" />
      ) : (
        <div>
          <Camera
            onTakePhotoAnimationDone={handleTakePhotoAnimationDone}
            isFullscreen={isFullscreen}
            idealFacingMode={idealFacingMode}
            idealResolution={{ width: 1920, height: 1080 }}
          />
          <button onClick={switchCamera}>Switch Camera</button>
        </div>
      )}
    </div>
  );
}

export default App;