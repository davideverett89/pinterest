import '../styles/main.scss';
import 'bootstrap';

import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';

import home from './components/home/home';
import auth from './components/auth/auth';
import authData from './helpers/data/authData';
import logout from './components/logout/logout';
import boards from './components/boards/boards';
import singleView from './components/singleView/singleView';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  home.createHomeSection();
  auth.createSignInButton();
  authData.checkLoginStatus();
  logout.logoutEvent();
  boards.boardEvents();
  singleView.singleViewActionEvents();
};

init();
