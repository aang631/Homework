(function () {
    'use strict';

    const socket = io(), // io.connect('localhost:80')
        messagesDiv = $('#messages'),
        messageInput = $('#message'),
        messageForm = $('#messageForm'),
        signInForm = $('#signInForm'),
        signInInput = $('#signInInput'),
        chatView = $('#chatView'),
        signInView = $('#signInView');

    socket.on('signIn', userName => {
        console.log(userName);
    });

    signInForm.submit(e => {
        e.preventDefault();
        socket.emit('userSignIn', signInInput.val());
        signInInput.val('');
        signInView.hide();
        chatView.show();
    });

    function scrollToBottom() {
        messagesDiv.scrollTop(messagesDiv[0].scrollHeight);
    }


    // listen for 'message' events from server
    socket.on('message', msg => {
        if (msg.message !== '') {
            messagesDiv.append('<span>' + msg.name + ": " + msg.message + '</span><br/>');
            scrollToBottom();
        }
    });

    socket.on('signIn', name => {
        messagesDiv.append('<span class="enter">' + name + ' has entered the chat</span><br/>');
        scrollToBottom();
    });

    socket.on('signOut', name => {
        messagesDiv.append('<span class="exit">' + name + ' has left the chat</span><br/>');
        scrollToBottom();
    });

    messageForm.submit(e => {
        e.preventDefault();
        socket.emit('message', messageInput.val());
        messageInput.val('');
    });

}());