const initialState = {
  user: null,
  messages: []
};

const SET_USER = "SET_USER";
const SET_MESSAGES = "SET_MESSAGES";

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case SET_MESSAGES:
      return { ...state, messages: action.payload };
    default:
      return state;
  }
}

export function setUser(user) {
  return {
    type: SET_USER,
    payload: user
  };
}

export function setMessages(messages) {
  return {
    type: SET_MESSAGES,
    payload: messages
  };
}
