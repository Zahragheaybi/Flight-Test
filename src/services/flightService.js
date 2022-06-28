import axios from "axios";
const SERVER_URL = "https://respina24.ir";

// @desc Get All Locations
// @route GET https://respina24.ir/flight/Locations1
export const getAllLocations = () => {
  const url = `${SERVER_URL}/flight/Locations1`
  return axios.get(url);
};


// @desc  Create New Contact
// @route POST http://localhost:9000/contacts
 export const getSearch = (items) => {
  const url = `${SERVER_URL}/flight/Availability`;
   return axios.post(url, items);
 };

