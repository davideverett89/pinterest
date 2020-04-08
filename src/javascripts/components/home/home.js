import utils from '../../helpers/utils';

import './home.scss';

const createHomeSection = () => {
  let domString = '';
  domString += '<h1 class="display-2 text-center">Firebase Pinterest</h1>';
  domString += '<p class="lead text-center">Please Sign In Below</p>';
  domString += '<div class="text-center" id="auth"></div>';
  utils.printToDom('home', domString);
};

export default { createHomeSection };
