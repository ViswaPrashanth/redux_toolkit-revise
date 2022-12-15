const redux = require("redux");
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers;

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
const ICECREAM_ORDERED = 'ICECREAM_ORDERED'
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED'

function orderCake(qty = 1) {
  return {
    type: CAKE_ORDERED,
    payload: qty,
  };
}

function restockCake(qty = 1) {
  return {
    type: CAKE_RESTOCKED,
    payload: qty,
  };
}

function orderIcecream(qty = 1){
  return {
    type : ICECREAM_ORDERED,
    payload : qty,
  }
}

function restockIcecream(qty = 1) {
  return {
    type: ICECREAM_RESTOCKED,
    payload : qty,
  }
}

const initialStateCake = {
  numOfCakes: 10,
};

const initialStateIcecream = {
  numOfIcecreams: 20,
};

const cakeReducer = (state = initialStateCake, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.payload,
      };
    case CAKE_RESTOCKED:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };
    default:
      return state;
  }
};

const icecreamReducer = (state = initialStateIcecream, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return {
        ...state,
        numOfIcecreams: state.numOfIcecreams - action.payload,
      };
    case ICECREAM_RESTOCKED:
      return {
        ...state,
        numOfIcecreams: state.numOfIcecreams + action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake : cakeReducer,
  icecream : icecreamReducer,
})

const store = createStore(rootReducer);
console.log("Initial State", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("Updated state", store.getState())
);

// store.dispatch(orderCake());
// store.dispatch(orderCake(2));
// store.dispatch(restockCake(3));

const actions = bindActionCreators({ orderCake, restockCake, orderIcecream, restockIcecream }, store.dispatch);
actions.orderCake();
actions.orderCake(2);
actions.restockCake(3);
actions.orderIcecream();
actions.orderIcecream(2);
actions.restockIcecream(3)

unsubscribe();
