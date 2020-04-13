import boardData from '../../helpers/data/boardData';
import utils from '../../helpers/utils';

import './editPin.scss';

const buildEditPinRadios = (currentBoardId, pinId, myUid) => {
  boardData.getBoardsByUid(myUid)
    .then((boards) => {
      let domString = '';
      domString += `<form data-pin-id="${pinId}" data-board-id="${currentBoardId}" class="change-pin-form">`;
      boards.forEach((board, index) => {
        if (currentBoardId !== board.id) {
          domString += '  <div class="form-check">';
          domString += `      <input data-board-id="${board.id}" class="form-check-input" type="radio" name="boardRadios" id="board-choice-${index + 1}" value="${board.id}">`;
          domString += `      <label class="form-check-label" for="board-choice-${index + 1}">${board.name}</label>`;
          domString += '  </div>';
        }
      });
      domString += '    <button id="submit-edit-button" type="button" class="m-2 btn btn-success">Move Pin</button>';
      domString += '</form>';
      utils.printToDom('edit-pin-view', domString);
      $('#edit-pin-modal').modal('show');
    })
    .catch((err) => console.error('Something is wrong with your radio buttons', err));
};

export default { buildEditPinRadios };
