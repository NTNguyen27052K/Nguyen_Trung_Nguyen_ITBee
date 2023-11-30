import { ADD, DELETE, EDIT, FIND } from "../Type/actionType";

const initialState = {
  contacts: [
    {
      id: 1,
      name: "John Doe One",
      email: "john@example.com",
      phone: "0381111111",
    },
    {
      id: 2,
      name: "Jane Smith Two",
      email: "jane@example.com",
      phone: "0382222222",
    },
    {
      id: 3,
      name: "Alice Johnson Three",
      email: "alice@example.com",
      phone: "0383333333",
    },
    {
      id: 4,
      name: "Bob Brown Four",
      email: "bob@example.com",
      phone: "0384444444",
    },
    {
      id: 5,
      name: "Eva Williams Five",
      email: "eva@example.com",
      phone: "0385555555",
    },
    {
      id: 6,
      name: "Michael Davis Six",
      email: "michael@example.com",
      phone: "0384444444",
    },
  ],
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE: {
      const findIndexUser = state.contacts.findIndex(
        (item) => item.id === action.payload
      );
      const newArrLstUsers = [...state.contacts];

      if (findIndexUser !== -1) {
        newArrLstUsers.splice(findIndexUser, 1);
      }

      return { ...state, contacts: newArrLstUsers };
    }
    case EDIT: {
      const findIndexUser = state.contacts.findIndex(
        (item) => item.id === action.payload.id
      );
      const newArrLstUsers = [...state.contacts];

      newArrLstUsers[findIndexUser] = action.payload;

      return { ...state, contacts: newArrLstUsers };
    }
    case ADD: {
      // console.log(action.payload);
      const findIndexUser = state.contacts.findIndex(
        (item) => item.id === action.payload.id
      );
      const newArrLstUsers = [...state.contacts];

      if (findIndexUser === -1) {
        newArrLstUsers.push({ ...action.payload });
      }

      // newArrLstUsers[findIndexUser] = action.payload;

      return { ...state, contacts: newArrLstUsers };
    }
    default: {
      return { ...state };
    }
  }
};
