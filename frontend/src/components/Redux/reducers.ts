const initialState = {
    heroes: null,
  };
  
  type ActionType = {
    type: string;
    payload?: any;
  };
  
  const rootReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
      case 'SET_HEROES':
        return {
          ...state,
          heroes: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  