// import firebase from 'firebase/app';
// import 'firebase/auth';

import utils from '../../helpers/utils';
import addPinModal from '../addPinModal/addPinModal';
import pinData from '../../helpers/data/pinData';

const addPinEvent = (e) => {
  const boardId = e.target.id;
  console.error(boardId);
  const newPin = {
    image: $('#pin-image').val(),
    boardId,
  };
  pinData.setPins(newPin);
  $('#new-pin-form').trigger('reset');
  $('#add-pin-modal').modal('hide');
};

const buildAddPinForm = (e) => {
  const boardId = e.target.closest('.modal-content').id;
  addPinModal.buildAddPinModal();
  let domString = '';
  domString += '<form id="new-pin-form">';
  domString += '    <div class="form-group">';
  domString += '        <label for="pin-image">Pin Image</label>';
  domString += '        <input type="text" class="form-control" id="pin-image" placeholder="Pin image here....">';
  domString += '    </div>';
  domString += `    <button id="${boardId}" type="button" class="btn btn-primary submit-pin">Add Pin</button>`;
  domString += '</form>';
  utils.printToDom('addPin', domString);
  $('#add-pin-modal').modal('show');
};

export default { buildAddPinForm, addPinEvent };
