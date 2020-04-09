// import firebase from 'firebase/app';
// import 'firebase/auth';

import utils from '../../helpers/utils';
import addPinModal from '../addPinModal/addPinModal';
import pinData from '../../helpers/data/pinData';

const addPinEvent = (e) => {
  const { boardId } = e.target.dataset;
  const newPin = {
    imageUrl: $('#pin-image').val(),
    boardId,
  };
  pinData.addPin(newPin)
    .then(() => {
      $('#new-pin-form').trigger('reset');
      $('#add-pin-modal').modal('hide');
      pinData.getPinsByBoardId(boardId).then((pins) => {
        let domString = '';
        pins.forEach((pin) => {
          domString += `<div class="col-6 pin-container" id="${pin.id}">`;
          domString += '<button class="delete-pin"><i class="far fa-times-circle"></i></button>';
          domString += `<img class="pin-image" src="${pin.imageUrl}" alt="${pin.id}" />`;
          domString += '</div>';
        });
        utils.printToDom('singleView', domString);
      });
    })
    .catch((err) => console.error('Could not add a new pin', err));
};

const buildAddPinForm = (e) => {
  const { boardId } = e.target.closest('.modal-content').dataset;
  const { boardName } = e.target.dataset;
  addPinModal.buildAddPinModal(boardName);
  let domString = '';
  domString += '<form id="new-pin-form">';
  domString += '    <div class="form-group">';
  domString += '        <label for="pin-image">Pin Image</label>';
  domString += '        <input type="text" class="form-control" id="pin-image" placeholder="Pin image here....">';
  domString += '    </div>';
  domString += `    <button data-board-id="${boardId}" type="button" class="btn btn-success submit-pin">Add Pin</button>`;
  domString += '</form>';
  utils.printToDom('addPin', domString);
  $('#add-pin-modal').modal('show');
};

export default { buildAddPinForm, addPinEvent };
