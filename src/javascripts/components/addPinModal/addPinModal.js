import utils from '../../helpers/utils';

import './addPinModal.scss';

const buildAddPinModal = () => {
  let domString = '';
  domString += '<div class="modal fade" id="add-pin-modal" tabindex="-1" role="dialog" aria-hidden="true">';
  domString += '    <div class="modal-dialog modal-dialog-centered" role="document">';
  domString += '        <div id="add-pin-modal-content" class="modal-content">';
  domString += '            <div class="modal-header">';
  domString += '                <h2>Add A New Pin</h2>';
  domString += '            </div>';
  domString += '            <div id="addPin" class="modal-body"></div>';
  domString += '        </div>';
  domString += '    </div>';
  domString += '</div>';
  utils.printToDom('add-pin-view', domString);
};

export default { buildAddPinModal };
