import firebase from 'firebase/app';
import 'firebase/auth';

import utils from '../../helpers/utils';

const signMeIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const createSignInButton = () => {
  const domString = '<button id="google-auth" class="btn btn-danger">Sign In</button>';
  utils.printToDom('auth', domString);
  $('#google-auth').click(signMeIn);
};

export default { createSignInButton };
