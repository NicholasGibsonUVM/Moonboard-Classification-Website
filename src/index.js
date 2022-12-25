import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCj90lhrE5e1h6bTtqNlf_F6ytMGOVhWNY",
  authDomain: "moonboard-grade-guesser.firebaseapp.com",
  projectId: "moonboard-grade-guesser",
  storageBucket: "moonboard-grade-guesser.appspot.com",
  messagingSenderId: "637437786795",
  appId: "1:637437786795:web:8c354f99fd64e68eb095ee",
  measurementId: "G-49SCK4KRZC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
