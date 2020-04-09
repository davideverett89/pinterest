import './createSingleBoard.scss';

const boardMaker = (board) => {
  let domString = '';
  domString += '<div class="col-4 board-separator">';
  domString += `    <div id="${board.id}" class="bg-primary text-light card my-board">`;
  domString += `        <h3 id="single-board-header" class="mb-2 p-2">${board.name}</h3>`;
  domString += '        <div class="card-body">';
  domString += `            <p>${board.description}</p>`;
  domString += '            <button class="single-view btn btn-outline-white"><i class="far fa-question-circle"></i></button>';
  domString += '            <button class="delete-board btn btn-outline-white"><i class="fas fa-trash-alt"></i></button>';
  domString += '        </div>';
  domString += '    </div>';
  domString += '</div>';
  return domString;
};

export default { boardMaker };
