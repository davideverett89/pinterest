const boardMaker = (board) => {
  let domString = '';
  domString += '<div class="col-4 board-separator">';
  domString += '    <div class="card my-board">';
  domString += `        <h3>${board.name}</h3>`;
  domString += '        <div class="card-body">';
  domString += `            <p>${board.description}</p>`;
  domString += '            <div id="pins" class="d-flex flex-wrap"></div>';
  domString += '        </div>';
  domString += '    </div>';
  domString += '</div>';
  return domString;
};

export default { boardMaker };
