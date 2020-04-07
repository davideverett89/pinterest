import firebase from 'firebase/app';
import 'firebase/auth';

import boards from '../../components/boards/boards';

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      $('#home').addClass('disappear');
      $('#add-board-button').removeClass('disappear');
      $('#logout-button').removeClass('disappear');
      $('#boards').removeClass('disappear');
      boards.printBoards();
    } else {
      $('#home').removeClass('disappear');
      $('#add-board-button').addClass('disappear');
      $('#logout-button').addClass('disappear');
      $('#boards').addClass('disappear');
    }
  });
};

export default { checkLoginStatus };
