import pinData from '../../helpers/data/pinData';
import smash from '../../helpers/data/smash';
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
  const { boardId } = e.target.closest('.single-view-modal').dataset;
  pinData.deletePinsByPinId(pinId)
    .then(() => {
      smash.getSingleBoardWithPins(boardId)
        .then((singleBoard) => {
          let domString = '';
          singleBoard.pins.forEach((pin) => {
            domString += `<div class="col-6 pin-container" id="${pin.id}">`;
            domString += '<button class="delete-pin"><i class="far fa-times-circle"></i></button>';
            domString += `<img class="pin-image" src="${pin.imageUrl}" alt="${pin.id}" />`;
            domString += '</div>';
          });
          utils.printToDom('singleView', domString);
        });
    })
    .catch((err) => console.error('Something isn\'t right', err));
};

const buildSingleView = (e) => {
  const boardId = e.target.closest('.card').id;
  singleViewModal.buildSingleViewModal(boardId);
  smash.getSingleBoardWithPins(boardId)
    .then((singleBoard) => {
      let domString = '';
      singleBoard.pins.forEach((pin) => {
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
    .catch((err) => console.error('Problem with smash function.', err));
};

export default { buildSingleView, closeSingleView, removePin };
