import './createSinglePin.scss';

const pinMaker = (pin) => {
  let domString = '';
  domString += `<div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 single-pin-container" id="${pin.id}">`;
  domString += '  <div class="p-1">';
  domString += '    <div class="image-overlay dropdown">';
  domString += '       <button class="btn-light btn-block dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>';
  domString += '       <div class="my-dropdown text-center dropdown-menu" aria-labelledby="dropdownMenuButton">';
  domString += '          <button class="delete-pin pin-button"><i class="far fa-times-circle"></i></button>';
  domString += '          <button class="edit-pin pin-button"><i class="far fa-edit"></i></button>';
  domString += '        </div>';
  domString += '    </div>';
  domString += `    <img class="pin-image img-fluid" src="${pin.imageUrl}" alt="${pin.id}" />`;
  domString += '  </div>';
  domString += '</div>';
  return domString;
};

export default { pinMaker };
