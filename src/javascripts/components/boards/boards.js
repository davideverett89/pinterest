import firebase from 'firebase/app';
import 'firebase/auth';

import createBoards from '../createBoards/createBoards';
import utils from '../../helpers/utils';
import boardData from '../../helpers/data/boardData';

import './boards.scss';

const printBoards = () => {
  const myUid = firebase.auth().currentUser.uid;
  boardData.getBoardsByUid(myUid)
    .then((boards) => {
      let domString = '';
      domString += '<h1 class="display-4">Boards</h1>';
      domString += '<div class="d-flex flex-wrap">';
      boards.forEach((board) => {
        domString += createBoards.boardMaker(board);
      });
      domString += '</div>';
      utils.printToDom('boards', domString);
    })
    .catch((err) => console.error('Print boards is not working', err));
};

export default { printBoards };
