import './addBoard.scss';

import utils from '../../helpers/utils';

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
};

export default { buildAddBoardForm };
