import { DELETE } from "../Type/actionType";

export const deleteUser = (item) => {
  return {
    type: DELETE,
    payload: item,
  };
};
