const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
  messages: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'Hello' },
    { id: 3, message: 'How are you?' },
    { id: 4, message: 'Yo' },
    { id: 5, message: 'Where are you from?' },
  ],
  dialogs: [
    { id: 1, name: 'Lisa' },
    { id: 2, name: 'Andrew' },
    { id: 3, name: 'Maria' },
    { id: 4, name: 'Clarisa' },
    { id: 5, name: 'Vera' },
  ],
  newMessageBody: '',
};
const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return { ...state, newMessageBody: action.body };

    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 7, message: body }],
        newMessageBody: '',
      };
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({
  type: SEND_MESSAGE,
});
export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});

export default dialogsReducer;
