const boardMaker = (board) => {
  let domString = '';
  domString += '<div class="col-4 board-separator">';
  domString += `    <div id="${board.id}" class="card my-board">`;
  domString += `        <h3>${board.name}</h3>`;
  domString += '        <div class="card-body">';
  domString += `            <p>${board.description}</p>`;
  domString += '            <button class="single-view btn btn-outline-info"><i class="far fa-question-circle"></i></button>';
  domString += '            <button class="delete-board btn btn-outline-danger"><i class="fas fa-trash-alt"></i></button>';
  domString += '        </div>';
  domString += '    </div>';
  domString += '</div>';
  return domString;
};

export default { boardMaker };
