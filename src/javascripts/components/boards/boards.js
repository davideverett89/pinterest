import firebase from 'firebase/app';
import 'firebase/auth';

import createSingleBoard from '../createSingleBoard/createSingleBoard';
import utils from '../../helpers/utils';
import boardData from '../../helpers/data/boardData';
import pinData from '../../helpers/data/pinData';
import singleView from '../singleView/singleView';

import './boards.scss';

const removeBoard = (e) => {
  const boardId = e.target.closest('.card').id;
  boardData.deleteBoard(boardId)
    .then(() => {
      pinData.getPinsByBoardId(boardId)
        .then((pins) => {
          pins.forEach((pin) => {
            const pinId = pin.id;
            pinData.deletePinsByPinId(pinId);
          });
        });
      // eslint-disable-next-line no-use-before-define
      printBoards();
      utils.printToDom('singleView', '');
    })
    .catch((err) => console.error('Something is not right', err));
};

const printBoards = () => {
  const myUid = firebase.auth().currentUser.uid;
  boardData.getBoardsByUid(myUid)
    .then((boards) => {
      let domString = '';
      domString += '<h1 id="board-header" class="p-3 display-4">My Boards</h1>';
      domString += '<div id="board-container" class="p-3 d-flex flex-wrap">';
      boards.forEach((board) => {
        domString += createSingleBoard.boardMaker(board);
      });
      domString += '</div>';
      utils.printToDom('boards', domString);
      $('body').on('click', '.single-view-button', singleView.singleViewEvents);
      $('body').on('click', '.delete-board', removeBoard);
    })
    .catch((err) => console.error('Print boards is not working', err));
};

export default { printBoards };
