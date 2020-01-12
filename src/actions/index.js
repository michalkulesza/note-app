import { UPDATE_EDITOR, ACTIVE_NOTE, NEW_NOTE, DELETE_NOTE, OPTION } from "./types";

export const updateEditor = (data, id, kind) => ({
  type: UPDATE_EDITOR,
  data,
  id,
  kind
});

export const activeNote = (index, data) => ({
  type: ACTIVE_NOTE,
  index,
  data
});

export const newNote = (id, data) => ({
  type: NEW_NOTE,
  id,
  data
});

export const deleteNote = id => ({
  type: DELETE_NOTE,
  id
});

export const changeOption = (option, value) => ({
  type: OPTION,
  option,
  value
});
