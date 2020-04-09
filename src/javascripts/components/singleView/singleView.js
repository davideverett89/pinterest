import pinData from '../../helpers/data/pinData';
import utils from '../../helpers/utils';
import singleViewModal from '../singleViewModal/singleViewModal';
import addPin from '../addPin/addPin';

import './singleView.scss';

const closeSingleView = () => {
  utils.printToDom('singleView', '');
  $('#single-view-modal').modal('hide');
};

const removePin = (e) => {
  const pinId = e.target.closest('.pin-container').id;
  const { boardId } = e.target.closest('.modal-content').dataset;
  console.error(pinId);
  pinData.deletePinsByPinId(pinId)
    .then(() => {
      pinData.getPinsByBoardId(boardId)
        .then((pins) => {
          let domString = '';
          pins.forEach((pin) => {
            domString += `<div class="col-6 pin-container" id="${pin.id}">`;
            domString += '<button class="delete-pin"><i class="far fa-times-circle"></i></button>';
            domString += `<img class="pin-image" src="${pin.imageUrl}" alt="${pin.id}" />`;
            domString += '</div>';
          });
          utils.printToDom('singleView', domString);
        });
    })
    .catch((err) => console.error('Something is wrong', err));
};

const buildSingleView = (e) => {
  const boardId = e.target.closest('.card').id;
  singleViewModal.buildSingleViewModal(boardId);
  pinData.getPinsByBoardId(boardId)
    .then((pins) => {
      let domString = '';
      pins.forEach((pin) => {
        domString += `<div class="col-6 pin-container" id="${pin.id}">`;
        domString += '<button class="delete-pin"><i class="far fa-times-circle"></i></button>';
        domString += `<img class="pin-image" src="${pin.imageUrl}" alt="${pin.id}" />`;
        domString += '</div>';
      });
      utils.printToDom('singleView', domString);
      $('#single-view-modal').modal('show');
      $('#exit-single-view').click(closeSingleView);
      $('#add-pin-button').click(addPin.buildAddPinForm);
    })
    .catch((err) => console.error('You fucked up', err));
};

export default { buildSingleView, closeSingleView, removePin };
