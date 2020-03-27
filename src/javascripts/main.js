import '../styles/main.scss';
import 'bootstrap';

import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';

import home from './components/home/home';
import auth from './components/auth/auth';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  home.createHomeSection();
  auth.createSignInButton();
};

init();
