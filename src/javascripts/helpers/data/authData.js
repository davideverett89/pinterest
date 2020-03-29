import firebase from 'firebase/app';
import 'firebase/auth';

import boards from '../../components/boards/boards';

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      $('#home').addClass('disappear');
      $('#logout-button').removeClass('disappear');
      $('#boards').removeClass('disappear');
      boards.printBoards();
    } else {
      $('#home').removeClass('disappear');
      $('#logout-button').addClass('disappear');
      $('#boards').addClass('disappear');
    }
  });
};

export default { checkLoginStatus };
