import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;
const addedBoards = [];

const getBoardsByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/boards.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      const myBoards = response.data;
      const boards = [];
      if (myBoards) {
        Object.keys(myBoards).forEach((boardId) => {
          myBoards[boardId].id = boardId;
          boards.push(myBoards[boardId]);
        });
      }
      resolve(boards);
    })
    .catch((err) => reject(err));
});

const setBoard = (board) => {
  addedBoards.push(board);
  console.error(addedBoards);
};

const deleteBoard = (boardId) => axios.delete(`${baseUrl}/boards/${boardId}.json`);

export default { getBoardsByUid, setBoard, deleteBoard };
