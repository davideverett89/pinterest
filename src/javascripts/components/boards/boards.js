import firebase from 'firebase/app';
import 'firebase/auth';

import createSingleBoard from '../createSingleBoard/createSingleBoard';
import utils from '../../helpers/utils';
import boardData from '../../helpers/data/boardData';
import pinData from '../../helpers/data/pinData';
import singleView from '../singleView/singleView';
import addBoard from '../addBoard/addBoard';

import './boards.scss';

const printBoards = () => {
  const myUid = firebase.auth().currentUser.uid;
  boardData.getBoardsByUid(myUid)
    .then((boards) => {
      if (boards.length > 0) {
        let domString = '';
        domString += '<h1 id="board-header" class="p-3 display-4">My Boards</h1>';
        domString += '<div id="board-container" class="p-3 d-flex flex-wrap">';
        boards.forEach((board) => {
          domString += createSingleBoard.boardMaker(board);
        });
        domString += '</div>';
        utils.printToDom('boards', domString);
        utils.printToDom('single-view', '');
        utils.printToDom('empty-page-message', '');
      } else {
        const domString = '<h4>Click the green button to add a board!</h4>';
        utils.printToDom('empty-page-message', domString);
        utils.printToDom('boards', '');
      }
    })
    .catch((err) => console.error('Print boards is not working', err));
};

const addBoardEvent = (e) => {
  e.preventDefault();
  const newName = $('#board-name').val();
  const newDescription = $('#board-description').val();
  const blankCheck = [newName, newDescription].some((inputValue) => /^\s*$/.test(inputValue));
  if (!blankCheck) {
    const newBoard = {
      name: newName,
      description: newDescription,
      uid: firebase.auth().currentUser.uid,
    };
    boardData.addBoard(newBoard)
      .then(() => {
        $('#new-board-form').trigger('reset');
        $('#add-board-modal').modal('hide');
        printBoards();
      })
      .catch((err) => console.error('Could not add a new board', err));
  }
};

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
      printBoards();
      utils.printToDom('single-view', '');
    })
    .catch((err) => console.error('Something is not right', err));
};

const boardEvents = () => {
  $('body').on('click', '#add-board', addBoardEvent);
  $('body').on('click', '#add-board-button', addBoard.buildAddBoardForm);
  $('body').on('click', '.single-view-button', singleView.singleViewEvents);
  $('body').on('click', '.delete-board-button', removeBoard);
};

export default { printBoards, boardEvents };
