import utils from '../../helpers/utils';

import './addPinModalContent.scss';

const buildAddPinModalContent = (boardName) => {
  let domString = '';
  domString += '<div class="modal-header">';
  domString += `  <h2>Add A New Pin to ${boardName}</h2>`;
  domString += '</div>';
  domString += '<div id="add-pin-view" class="modal-body"></div>';
  utils.printToDom('add-pin-modal-content', domString);
};

export default { buildAddPinModalContent };
