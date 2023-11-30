import { DELETE, EDIT, FIND } from "../Type/actionType";

export const deleteUser = (item) => {
  return {
    type: DELETE,
    payload: item,
  };
};
export const editUser = (item) => {
  return {
    type: EDIT,
    payload: item,
  };
};
