import pinData from '../../helpers/data/pinData';
import utils from '../../helpers/utils';

import './singleView.scss';

const buildSingleView = (e) => {
  const boardId = e.target.closest('.card').id;
  console.error(boardId);
  pinData.getPinsByBoardId(boardId)
    .then((pins) => {
      let domString = '';
      pins.forEach((pin) => {
        domString += `<img class="pin-image" src="${pin.imageUrl}" alt="${pin.id}" />`;
        console.error(pin.imageUrl);
      });
      utils.printToDom('singleView', domString);
      $('#single-board-modal').modal('show');
    })
    .catch((err) => console.error('You fucked up', err));
};

const closeSingleView = () => {
  utils.printToDom('singleView', '');
  $('#single-board-modal').modal('hide');
};

export default { buildSingleView, closeSingleView };
