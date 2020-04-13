import './createSinglePin.scss';

const pinMaker = (pin) => {
  let domString = '';
  domString += `  <div class="col-6 single-pin-container" id="${pin.id}">`;
  domString += '    <button class="delete-pin"><i class="far fa-times-circle"></i></button>';
  domString += '    <button class="edit-pin"><i class="far fa-edit"></i></button>';
  domString += `    <img class="pin-image img-fluid" src="${pin.imageUrl}" alt="${pin.id}" />`;
  domString += '  </div>';
  return domString;
};

export default { pinMaker };
