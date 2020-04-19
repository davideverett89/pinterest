import firebase from 'firebase/app';
import 'firebase/auth';

import boards from '../../components/boards/boards';
import singleView from '../../components/singleView/singleView';

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      $('#home').addClass('disappear');
      $('#show-add-board-form-button').removeClass('disappear');
      $('#logout-button').removeClass('disappear');
      $('#boards').removeClass('disappear');
      $('#empty-page-message').removeClass('disappear');
      $('#single-view').removeClass('disappear');
      boards.printBoards();
      boards.boardEvents();
      singleView.singleViewActionEvents();
    } else {
      $('#home').removeClass('disappear');
      $('#show-add-board-form-button').addClass('disappear');
      $('#logout-button').addClass('disappear');
      $('#boards').addClass('disappear');
      $('#empty-page-message').addClass('disappear');
      $('#single-view').addClass('disappear');
      boards.removeBoardEvents();
      singleView.removeSingleViewActionEvents();
    }
  });
};

export default { checkLoginStatus };
