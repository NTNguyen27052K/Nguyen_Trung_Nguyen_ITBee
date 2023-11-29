import { DELETE } from "../Type/actionType";

const initialState = {
  contacts: [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "123-456-7890",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "987-654-3210",
    },
    {
      id: 3,
      name: "Alice Johnson",
      email: "alice@example.com",
      phone: "111-222-3333",
    },
    {
      id: 4,
      name: "Bob Brown",
      email: "bob@example.com",
      phone: "555-555-5555",
    },
    {
      id: 5,
      name: "Eva Williams",
      email: "eva@example.com",
      phone: "777-777-7777",
    },
    {
      id: 6,
      name: "Michael Davis",
      email: "michael@example.com",
      phone: "999-999-9999",
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
    default: {
      return { ...state };
    }
  }
};
