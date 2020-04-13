import utils from '../../helpers/utils';
import addPinModalContent from '../addPinModalContent/addPinModalContent';

const buildAddPinForm = (e) => {
  const selectedBoardId = e.target.dataset.boardId;
  const selectedBoardName = e.target.dataset.boardName;
  addPinModalContent.buildAddPinModalContent(selectedBoardName);
  let domString = '';
  domString += '<form id="new-pin-form">';
  domString += '    <div class="form-group">';
  domString += '        <label for="pin-image">Pin Image</label>';
  domString += '        <input type="text" class="form-control" id="pin-image" placeholder="Pin image here....">';
  domString += '    </div>';
  domString += `    <button data-board-id="${selectedBoardId}" type="button" class="btn btn-success submit-pin">Add Pin</button>`;
  domString += '</form>';
  utils.printToDom('add-pin-view', domString);
  $('#add-pin-modal').modal('show');
};

export default { buildAddPinForm };
