var chatBody = document.getElementsByClassName('chat-body')[0];
var input = document.getElementsByClassName('chat-input__textarea')[0];

function sendMessage(messageText, from) {
  if (!messageText) var messageText = input.value;
  messageText = messageText.trim();
  if (messageText.length === 0) return;
  if (!from) {
    var messageBody =
      '<div class="row"><div class="chat-body__message chat-body__message--sent"><div class="message-author"><p>You</p></div>' +
      messageText + '</div></div>'
  } else {
    var messageBody =
      '<div class="row"><div class="chat-body__message chat-body__message--reply"><div class="message-author"><p>' +
      from + '</p></div>' + messageText + '</div></div>'
  }
  chatBody.innerHTML += messageBody;
  chatBody.scrollTop = 999999;
}

function resetInput() {
  document.getElementsByClassName('chat-input__textarea')[0].value = '';
}

input.addEventListener('keypress', function(e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    sendMessage();
    resetInput();
  }
})

document.getElementsByClassName('chat-input__send')[0].onclick = function() {
  sendMessage();
  resetInput();
}