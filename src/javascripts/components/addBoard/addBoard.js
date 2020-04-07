import firebase from 'firebase/app';
import 'firebase/auth';

import utils from '../../helpers/utils';
import addBoardModal from '../addBoardModal/addBoardModal';
import boardData from '../../helpers/data/boardData';

const addBoardEvent = () => {
  const myUid = firebase.auth().currentUser.uid;
  const newBoard = {
    name: $('#board-name').val(),
    description: $('#board-description').val(),
    uid: myUid,
  };
  boardData.setBoard(newBoard);
  $('#new-board-form').trigger('reset');
  $('#add-board-modal').modal('hide');
};

const buildAddBoardForm = () => {
  addBoardModal.buildAddBoardModal();
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
  domString += '    <button type="button" id="add-board" class="btn btn-primary">Add Board</button>';
  domString += '</form>';
  utils.printToDom('addBoard', domString);
  $('#add-board-modal').modal('show');
  $('#add-board').click(addBoardEvent);
};

export default { buildAddBoardForm };
