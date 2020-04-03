import pinData from '../../helpers/data/pinData';
import utils from '../../helpers/utils';

import './singleView.scss';

const removePin = (e) => {
  const pinId = e.target.closest('.pin').id;
  const boardId = e.target.closest('.pin-container').id;
  pinData.deletePinsByPinId(pinId)
    .then(() => {
      pinData.getPinsByBoardId(boardId)
        .then((pins) => {
          let domString = '';
          pins.forEach((pin) => {
            domString += `<div class="pin-container" id="${boardId}">`;
            domString += `<div class="pin" id="${pin.id}">`;
            domString += '<button class="delete-pin"><i class="far fa-times-circle"></i></button>';
            domString += `<img class="pin-image" src="${pin.imageUrl}" alt="${pin.id}" />`;
            domString += '</div>';
            domString += '</div>';
          });
          utils.printToDom('singleView', domString);
          $('#single-board-modal').modal('show');
          $('body').on('click', '.delete-pin', removePin);
        });
    })
    .catch((err) => console.error('Something is wrong', err));
};

const buildSingleView = (e) => {
  const boardId = e.target.closest('.card').id;
  pinData.getPinsByBoardId(boardId)
    .then((pins) => {
      let domString = '';
      pins.forEach((pin) => {
        domString += `<div class="pin-container" id="${boardId}">`;
        domString += `<div class="pin" id="${pin.id}">`;
        domString += '<button class="delete-pin"><i class="far fa-times-circle"></i></button>';
        domString += `<img class="pin-image" src="${pin.imageUrl}" alt="${pin.id}" />`;
        domString += '</div>';
        domString += '</div>';
      });
      utils.printToDom('singleView', domString);
      $('#single-board-modal').modal('show');
      $('body').on('click', '.delete-pin', removePin);
    })
    .catch((err) => console.error('You fucked up', err));
};

const closeSingleView = () => {
  utils.printToDom('singleView', '');
  $('#single-board-modal').modal('hide');
};

export default { buildSingleView, closeSingleView };
