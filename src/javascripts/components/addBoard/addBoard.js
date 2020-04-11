import firebase from 'firebase/app';
import 'firebase/auth';

import './addBoard.scss';

import utils from '../../helpers/utils';
import boardData from '../../helpers/data/boardData';
import boards from '../boards/boards';

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
        boards.printBoards();
      })
      .catch((err) => console.error('Could not add a new board', err));
  }
};

const buildAddBoardForm = () => {
  let domString = '';
  domString += '<form id="new-board-form">';
  domString += '    <div class="form-group">';
  domString += '        <label for="board-name">Board Name</label>';
  domString += '        <input type="text" class="form-control" id="board-name" placeholder="Name your board...">';
  domString += '    </div>';
  domString += '    <div class="form-group">';
  domString += '        <label for="board-description">Board Description</label>';
  domString += '        <input type="text" class="form-control" id="board-description" placeholder="Describe your board...">';
  domString += '    </div>';
  domString += '    <button type="button" id="add-board" class="btn btn-success">Add Board</button>';
  domString += '</form>';
  utils.printToDom('add-board-view', domString);
  $('#add-board-modal').modal('show');
  $('#add-board').click(addBoardEvent);
};

export default { buildAddBoardForm };
