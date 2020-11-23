import { createAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const addContact = createAction("contacts/add", (name, number) => ({
  payload: {
    contact: {
      id: uuidv4(),
      name,
      number: Number(number),
    },
  },
}));

const deleteContact = createAction("contacts/delete");

const handleChangeFilter = createAction("contacts/changeFilter");

const handleChangetheme = createAction("contacts/changeTheme");

export default {
  addContact,
  deleteContact,
  handleChangeFilter,
  handleChangetheme,
};
