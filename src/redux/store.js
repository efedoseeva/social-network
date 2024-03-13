import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import sidebarReducer from './sidebar-reducer';

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'How are you?', likesCount: 12 },
        { id: 2, message: "It's my first post", likesCount: 20 },
        { id: 3, message: 'hey', likesCount: 2 },
      ],
      newPostText: 'hi',
    },
    dialogsPage: {
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
    },
    sideBar: {
      friends: [
        { id: 1, name: 'Tony' },
        { id: 2, name: 'Kate' },
        { id: 3, name: 'Anna' },
      ],
    },
  },
  _callSubscriber() {},
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebarPage = sidebarReducer(this._state.sideBar, action);
    this._callSubscriber(this._state);
  },
};

export default store;
window.store = store;
