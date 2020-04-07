// import firebase from 'firebase/app';
// import 'firebase/auth';

import utils from '../../helpers/utils';

const addPinEvent = (e) => {
  const boardId = e.target.id;
  console.error(boardId);
  const newPin = {
    image: $('#pin-image').val(),
    boardId,
  };
  console.error(newPin);
  $('#new-pin-form').trigger('reset');
  $('#add-pin-modal').modal('hide');
};

const buildAddPinForm = (e) => {
  console.error(e.target.id);
  let domString = '';
  domString += '<form id="new-pin-form">';
  domString += '    <div class="form-group">';
  domString += '        <label for="pin-image">Pin Image</label>';
  domString += '        <input type="text" class="form-control" id="pin-image" placeholder="Pin image here....">';
  domString += '    </div>';
  domString += '    <button type="button" class="btn btn-primary submit-pin">Add Pin</button>';
  domString += '</form>';
  utils.printToDom('addPin', domString);
  $('#add-pin-modal').modal('show');
  $('body').on('click', '.submit-pin', addPinEvent);
};

export default { buildAddPinForm };
