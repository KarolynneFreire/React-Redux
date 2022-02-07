const initialState = [
    { id: 1, name: "Test Name", cpf: "10203459680" },
  ];
  
  export const clienteReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_CLIENTE":
        state = [...state, action.payload];
        return state;
      case "DELETE_CLIENTE":
        const clienteFilter = state.filter((cliente) =>
          cliente.id === action.payload ? null : cliente
        );
        state = clienteFilter;
        return state;
      case "UPDATE_CLIENTE":
        const clienteUpdate = state.filter((cliente) =>
          cliente.id === action.payload.id
            ? Object.assign(cliente, action.payload)
            : cliente
        );
        state = clienteUpdate;
        return state;
      case "RESET_CLIENTE":
        state = [{ name: null, cpf: null }];
        return state;
      default:
        return state;
    }
  };
  