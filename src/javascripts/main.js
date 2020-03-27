import '../styles/main.scss';
import 'bootstrap';

import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';

import home from './components/home/home';
import boards from './components/boards/boards';
import auth from './components/auth/auth';
import authData from './helpers/data/authData';
import logout from './components/logout/logout';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  home.createHomeSection();
  boards.createBoards();
  auth.createSignInButton();
  authData.checkLoginStatus();
  logout.logoutEvent();
};

init();
