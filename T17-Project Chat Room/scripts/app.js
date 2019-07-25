// dom queries
const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const updateMssg = document.querySelector('.update-mssg');
const rooms = document.querySelector('.chat-rooms');

// add a new chat
newChatForm.addEventListener('submit', e => {
  e.preventDefault();
  const message = newChatForm.message.value.trim();
  chatRoom.addChat(message)
    .then(() => newChatForm.reset())
    .catch(err => console.log(err));
});

// update username
newNameForm.addEventListener('submit', e => {
  e.preventDefault();
  const newName = newNameForm.name.value.trim();
  chatRoom.updateUsername(newName); 
  newNameForm.reset();
  // show then hide the update message
  updateMssg.innerText = `Your name was update to ${newName}`;
  setTimeout(() => updateMssg.innerText = '', 3000);
});

// update the chat room 
rooms.addEventListener('click', e =>{
  if(e.target.tagName === 'BUTTON'){
    chatUI.clear(); 
    const roomName = e.target.id;
    console.log(roomName);
    chatRoom.updateRoom(roomName);
    chatRoom.getChats(chat => chatUI.render(chat));
  }
});
// check local storage for a name
const username = localStorage.username ? localStorage.username : 'anon';

// check local storage for a romm

// class instances
const chatUI = new ChatUI(chatList);
const chatRoom = new Chatroom('general', username);


// get chats and render
chatRoom.getChats((data) => chatUI.render(data));