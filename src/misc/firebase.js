import { Notification as Toast } from 'rsuite';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';
import { getMessaging, isSupported, onMessage } from 'firebase/messaging';
import { getFunctions, connectFunctionsEmulator } from 'firebase/functions';
import { isLocalhost } from './helpers';

const config = {
  apiKey: "AIzaSyDBy0sHicaV5iZ2fuqhPfOTrsiCUL6h1-4",
  authDomain: "chatapp-112fc.firebaseapp.com",
  projectId: "chatapp-112fc",
  storageBucket: "chatapp-112fc.appspot.com",
  messagingSenderId: "396289661227",
  databaseURL: 'https://chatapp-112fc.firebaseio.com',
  appId: "1:396289661227:web:8392f621c81ce93dc7cd6e",
  measurementId: "G-TXH2QX0SFV",
  
};

export const fcmVapidKey =
  'BHvPuSHrK-S7DaTO8S46QqHg5pIfYPTGHsMlWvcvSqL94nsBMv-UQJLTJeyH1wxZE4L0TZTTy3X8lXbzgTZajQc';

const app = initializeApp(config);
export const auth = getAuth(app);
export const database = getDatabase(app);
export const storage = getStorage(app);
export const functions = getFunctions(app, 'europe-west3');

export const messaging = isSupported() ? getMessaging(app) : null;

if (messaging) {
  onMessage(messaging, ({ notification }) => {
    const { title, body } = notification;
    Toast.info({ title, description: body, duration: 0 });
  });
}

if (isLocalhost) {
  connectFunctionsEmulator(functions, 'localhost', 5001);
}
