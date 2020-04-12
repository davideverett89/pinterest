import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getPinsByBoardId = (boardId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/pins.json?orderBy="boardId"&equalTo="${boardId}"`)
    .then((response) => {
      const myPins = response.data;
      const pins = [];
      Object.keys(myPins).forEach((pinId) => {
        myPins[pinId].id = pinId;
        pins.push(myPins[pinId]);
      });
      resolve(pins);
    })
    .catch((err) => reject(err));
});

const addPin = (newPin) => axios.post(`${baseUrl}/pins.json`, newPin);

const updatePin = (pinId, newBoard) => axios.patch(`${baseUrl}/pins/${pinId}.json`, { boardId: newBoard });

const deletePinsByPinId = (pinId) => axios.delete(`${baseUrl}/pins/${pinId}.json`);

export default {
  getPinsByBoardId,
  deletePinsByPinId,
  addPin,
  updatePin,
};
