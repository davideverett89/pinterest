import utils from '../../helpers/utils';
import boardData from '../../helpers/data/boardData';

import './singleViewModal.scss';

const buildSingleViewModal = (boardId) => {
  boardData.getSingleBoardById(boardId)
    .then((response) => {
      const currentBoard = response.data;
      let domString = '';
      domString += '<div class="modal fade" id="single-view-modal" tabindex="-1" role="dialog" aria-hidden="true">';
      domString += '    <div class="modal-dialog" role="document">';
      domString += `        <div id="single-view-content" data-board-id="${boardId}" class="bg-primary modal-content">`;
      domString += '            <div class="bg-light modal-header">';
      domString += '                <button id="exit-single-view" class="btn btn-outline-danger"><i class="fas fa-times"></i></button>';
      domString += `                <h3>${currentBoard.name}</h3>`;
      // eslint-disable-next-line max-len
      domString += `                <button data-board-name="${currentBoard.name}" id="add-pin-button" class="btn btn-outline-success"><i data-board-name="${currentBoard.name}" class="fas fa-plus-circle"></i></button>`;
      domString += '            </div>';
      domString += '            <div id="singleView" class="row modal-body d-flex flex-wrap justify-content-between text-center"></div>';
      domString += '        </div>';
      domString += '    </div>';
      domString += '</div>';
      utils.printToDom('single-view', domString);
    })
    .catch((err) => console.error(err));
};

export default { buildSingleViewModal };
