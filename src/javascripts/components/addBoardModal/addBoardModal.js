import utils from '../../helpers/utils';

const buildAddBoardModal = () => {
  let domString = '';
  domString += '<div class="modal fade" id="add-board-modal" tabindex="-1" role="dialog" aria-hidden="true">';
  domString += '    <div class="modal-dialog" role="document">';
  domString += '        <div class="modal-content">';
  domString += '            <div class="modal-header">';
  domString += '                <h2>Add A New Board</h2>';
  domString += '            </div>';
  domString += '            <div id="addBoard" class="modal-body"></div>';
  domString += '        </div>';
  domString += '    </div>';
  domString += '</div>';
  utils.printToDom('add-board-view', domString);
};

export default { buildAddBoardModal };
