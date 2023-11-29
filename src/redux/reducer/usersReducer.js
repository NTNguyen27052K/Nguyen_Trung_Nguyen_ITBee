const initialState = {
  contacts: [
    {
      name: "John Doe",
      email: "john@example.com",
      phone: "123-456-7890",
      image: "https://picsum.photos/200/300",
    },
    {
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "987-654-3210",
      image: "https://picsum.photos/200/300",
    },
    {
      name: "Alice Johnson",
      email: "alice@example.com",
      phone: "111-222-3333",
      image: "https://picsum.photos/200/300",
    },
    {
      name: "Bob Brown",
      email: "bob@example.com",
      phone: "555-555-5555",
      image: "https://picsum.photos/200/300",
    },
    {
      name: "Eva Williams",
      email: "eva@example.com",
      phone: "777-777-7777",
      image: "https://picsum.photos/200/300",
    },
    {
      name: "Michael Davis",
      email: "michael@example.com",
      phone: "999-999-9999",
      image: "https://picsum.photos/200/300",
    },
  ],
};

export const usersReducer = (state = initialState, action) => {
  // luôn luôn return về state
  switch (action.type) {
    case "ADDTOCART": {
      console.log(action);
      // check là sản phẩm đã có trong giỏ hàng hay chưa
      const index = state.arrCart.findIndex(
        (item) => item.id == action.payload.id
      );
      const newArrCart = [...state.arrCart];

      if (index == -1) {
        newArrCart.push({ ...action.payload, soLuong: 1 });
      } else {
        const product = {
          ...newArrCart[index],
          soLuong: newArrCart[index].soLuong + 1,
        };
        // newArrCart[index].soLuong += 1;
        newArrCart[index] = { ...product };
      }
      return { ...state, arrCart: newArrCart };

      // immutable //bất biến
    }
    default: {
      return { ...state };
    }
  }
};
