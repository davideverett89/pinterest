import pinData from '../../helpers/data/pinData';
import smash from '../../helpers/data/smash';
import utils from '../../helpers/utils';
import addPin from '../addPin/addPin';

import './singleView.scss';

const closeSingleView = () => {
  utils.printToDom('single-view', '');
  $('#single-view').addClass('disappear');
  $('#boards').removeClass('disappear');
};

const removePin = (e) => {
  const pinId = e.target.closest('.single-pin-container').id;
  const { boardId } = e.target.closest('.card').dataset;
  pinData.deletePinsByPinId(pinId)
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      buildSingleView(boardId);
    })
    .catch((err) => console.error('Something isn\'t right', err));
};

const addPinEvent = (e) => {
  const { boardId } = e.target.dataset;
  const newImage = $('#pin-image').val();
  const blankCheck = /^\s*$/.test(newImage);
  if (!blankCheck) {
    const newPin = {
      imageUrl: newImage,
      boardId,
    };
    pinData.addPin(newPin)
      .then(() => {
        $('#new-pin-form').trigger('reset');
        $('#add-pin-modal').modal('hide');
        // eslint-disable-next-line no-use-before-define
        buildSingleView(boardId);
      })
      .catch((err) => console.error('Could not add a new pin', err));
  }
};

const buildSingleView = (boardId) => {
  smash.getSingleBoardWithPins(boardId)
    .then((singleBoard) => {
      let domString = '';
      domString += '<div id="single-board-header">';
      domString += '<button id="close-single-view-button" class="btn btn-outline-danger"><i class="fas fa-times"></i></button>';
      // eslint-disable-next-line max-len
      domString += `<button data-board-id="${singleBoard.id}" data-board-name="${singleBoard.name}" id="add-pin-button" class="btn btn-outline-success"><i data-board-name="${singleBoard.name}" class="fas fa-plus-circle"></i></button>`;
      domString += `<h2 class="p-1 display-4">${singleBoard.name}</h2>`;
      domString += '</div>';
      domString += `<div id="pin-container" data-board-id="${singleBoard.id}" class="col-9 mx-auto card bg-primary m-2 d-flex flex-wrap flex-row justify-content-start align-items-center">`;
      singleBoard.pins.forEach((pin) => {
        domString += `<div class="col-6 single-pin-container" id="${pin.id}">`;
        domString += '<button class="delete-pin"><i class="far fa-times-circle"></i></button>';
        domString += `<img class="pin-image" src="${pin.imageUrl}" alt="${pin.id}" />`;
        domString += '</div>';
      });
      domString += '</div>';
      utils.printToDom('single-view', domString);
      $('#single-view').removeClass('disappear');
      $('#boards').addClass('disappear');
      $('body').on('click', '.submit-pin', addPinEvent);
    })
    .catch((err) => console.error('Problem with smash function.', err));
};

const singleViewEvents = (e) => {
  const boardId = e.target.closest('.card').id;
  buildSingleView(boardId);
};

const singleViewActionEvents = () => {
  $('#close-single-view-button').click(closeSingleView);
  $('#add-pin-button').click(addPin.buildAddPinForm);
  $('body').on('click', '.delete-pin', removePin);
};

export default { singleViewEvents, closeSingleView, singleViewActionEvents };
