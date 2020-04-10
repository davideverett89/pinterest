import boardData from './boardData';
import pinData from './pinData';

const getSingleBoardWithPins = (boardId) => new Promise((resolve, reject) => {
  boardData.getSingleBoardById(boardId)
    .then((response) => {
      const singleBoard = response.data;
      singleBoard.id = boardId;
      singleBoard.pins = [];
      pinData.getPinsByBoardId(singleBoard.id).then((pins) => {
        pins.forEach((pin) => {
          singleBoard.pins.push(pin);
        });
        resolve(singleBoard);
      });
    })
    .catch((err) => reject(err));
});

export default { getSingleBoardWithPins };
