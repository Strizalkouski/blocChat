(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("Messages");
    var messages = $firebaseArray(ref);
    Message.all = messages;
      
    Message.getByRoomId = function(roomId) {
        return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
    }
    
    Message.send = function(newMessage) {
        messages.$add(newMessage);
    }

    return Message;
  }

  angular
    .module('bloc-chat')
    .factory('Message', ['$firebaseArray', Message]);
})();