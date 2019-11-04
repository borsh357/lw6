var chatBody = document.getElementsByClassName('chat-body')[0];
var input = document.getElementsByClassName('chat-input__textarea')[0];

function botResponse() {
  var messageText = '<p><strong>Joe Mama</strong></p>I am a stupid chat bot and I can\'t reply to your message right now, but I hope some day I will be able to...';
  var messageBody = '<div class="chat-body__message chat-body__message--reply">' + messageText + '</div>'
  chatBody.innerHTML += messageBody;
}

function sendMessage() {
  var messageText = '<p><strong>You</strong></p>' + input.value;
  if (messageText.length === 0) return;
  var messageBody = '<div class="chat-body__message chat-body__message--sent">' + messageText + '</div>'
  chatBody.innerHTML += messageBody;
  botResponse();
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