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


import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [photoSrc, setPhotoSrc] = useState(null);

  const handleCameraInput = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      const videoElement = document.getElementById('cameraVideo');

      // Встановлюємо відеопотік у відеоелемент
      videoElement.srcObject = stream;

      // Очікуємо, коли відеопотік буде готовий до відтворення
      videoElement.onloadedmetadata = () => {
        videoElement.play();

        // Створюємо елемент canvas для обробки зображення
        const canvasElement = document.createElement('canvas');
        canvasElement.width = videoElement.videoWidth;
        canvasElement.height = videoElement.videoHeight;
        const canvasContext = canvasElement.getContext('2d');

        // Очікуємо кадр відео та копіюємо його на canvas
        videoElement.addEventListener('loadeddata', () => {
          canvasContext.drawImage(videoElement, 0, 0, canvasElement.width, canvasElement.height);
          const photoDataUrl = canvasElement.toDataURL('image/jpeg'); // отримуємо base64-представлення фото
          setPhotoSrc(photoDataUrl); // встановлюємо фото в стан компонента
          stream.getTracks().forEach(track => track.stop()); // зупиняємо відеопотік
        });
      };
    } catch (error) {
      console.error('Помилка при відкритті камери:', error);
    }
  };

  return (
    <div className="App">
      <button onClick={handleCameraInput}>Відкрити камеру</button>
      <video id="cameraVideo" width="640" height="480" style={{ display: photoSrc ? 'none' : 'block' }}></video>
      {photoSrc && <img src={photoSrc} alt="Зображення з камери" />}
    </div>
  );
}

export default App;
