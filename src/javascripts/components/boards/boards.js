import utils from '../../helpers/utils';

import './boards.scss';

const createBoards = () => {
  const domString = '<h1 class="display-4">Boards</h1>';
  utils.printToDom('boards', domString);
};

export default { createBoards };
