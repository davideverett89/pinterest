import firebase from 'firebase/app';
import 'firebase/auth';

import pinData from '../../helpers/data/pinData';
import smash from '../../helpers/data/smash';
import utils from '../../helpers/utils';
import addPin from '../addPin/addPin';
import createSinglePin from '../createSinglePin/createSinglePin';
import editPin from '../editPin/editPin';

import './singleView.scss';

const buildSingleView = (boardId) => {
  smash.getSingleBoardWithPins(boardId)
    .then((singleBoard) => {
      let domString = '';
      domString += '<div id="single-board-header">';
      domString += '  <button id="close-single-view-button" class="btn btn-outline-danger"><i class="fas fa-times"></i></button>';
      // eslint-disable-next-line max-len
      domString += `  <button data-board-id="${singleBoard.id}" data-board-name="${singleBoard.name}" id="add-pin-button" class="btn btn-outline-success"><i data-board-name="${singleBoard.name}" class="fas fa-plus-circle"></i></button>`;
      domString += `  <h2 class="p-1 display-4">${singleBoard.name}</h2>`;
      domString += '</div>';
      if (singleBoard.pins.length > 0) {
        domString += `<div id="pin-container" data-board-id="${singleBoard.id}" class="col-9 mx-auto card bg-primary m-2 d-flex flex-wrap flex-row justify-content-start align-items-center">`;
        singleBoard.pins.forEach((pin) => {
          domString += createSinglePin.pinMaker(pin);
        });
        domString += '</div>';
      }
      utils.printToDom('single-view', domString);
      $('#single-view').removeClass('disappear');
      $('#boards').addClass('disappear');
    })
    .catch((err) => console.error('Problem with smash function.', err));
};

const closeSingleView = () => {
  utils.printToDom('single-view', '');
  $('#single-view').addClass('disappear');
  $('#boards').removeClass('disappear');
};

const removePin = (e) => {
  const pinId = e.target.closest('.single-pin-container').id;
  const selectedBoardId = e.target.closest('.card').dataset.boardId;
  pinData.deletePinsByPinId(pinId)
    .then(() => {
      buildSingleView(selectedBoardId);
    })
    .catch((err) => console.error('Something isn\'t right', err));
};

const addPinEvent = (e) => {
  const selectedboardId = e.target.dataset.boardId;
  console.error(selectedboardId);
  const newImage = $('#pin-image').val();
  const blankCheck = /^\s*$/.test(newImage);
  if (!blankCheck) {
    const newPin = {
      imageUrl: newImage,
      selectedboardId,
    };
    pinData.addPin(newPin)
      .then(() => {
        $('#new-pin-form').trigger('reset');
        $('#add-pin-modal').modal('hide');
        buildSingleView(selectedboardId);
      })
      .catch((err) => console.error('Could not add a new pin', err));
  }
};

const singleViewEvents = (e) => {
  const boardId = e.target.closest('.card').id;
  buildSingleView(boardId);
};

const editPinEvent = (e) => {
  const pinId = e.target.closest('.single-pin-container').id;
  const selectedboardId = e.target.closest('.card').dataset;
  const myUid = firebase.auth().currentUser.uid;
  editPin.buildEditPinRadios(selectedboardId, pinId, myUid);
};

const movePin = (e) => {
  const selectedPinId = e.target.closest('.change-pin-form').dataset.pinId;
  const currentBoardId = e.target.closest('.change-pin-form').dataset.boardId;
  const selectedBoardId = $("input[name='boardRadios']:checked").val();
  pinData.updatePin(selectedPinId, selectedBoardId)
    .then(() => {
      buildSingleView(currentBoardId);
      $('#edit-pin-modal').modal('hide');
    })
    .catch((err) => console.error('Could not update pin', err));
};

const singleViewActionEvents = () => {
  $('body').on('click', '#close-single-view-button', closeSingleView);
  $('body').on('click', '#add-pin-button', addPin.buildAddPinForm);
  $('body').on('click', '.delete-pin', removePin);
  $('body').on('click', '.submit-pin', addPinEvent);
  $('body').on('click', '.edit-pin', editPinEvent);
  $('body').on('click', '#submit-edit-button', movePin);
};

export default { singleViewEvents, closeSingleView, singleViewActionEvents };
