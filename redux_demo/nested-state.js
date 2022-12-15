const redux = require("redux");
const createStore = redux.createStore;
const produce = require("immer").produce;

const STREET_UPDATED = "STREET_UPDATED";

function updateStreet(street) {
  return {
    type: STREET_UPDATED,
    payload: street,
  };
}

const intialState = {
  name: "Prashanth",
  address: {
    street: "123 Main street",
    city: "Amalapuram",
    state: "Andhra Pradesh",
  },
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case STREET_UPDATED:
      //   return {
      //     ...state,
      //     address: {
      //       ...state.address,
      //       street: action.payload,
      //     },
      //   };
      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });
    default: {
      return state;
    }
  }
};

const store = createStore(reducer);
console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("Updated state", store.getState());
});
store.dispatch(updateStreet("456 gate street"));
unsubscribe();
