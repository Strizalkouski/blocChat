(function() {
    function HomeCtrl(Room, Message, $uibModal, $cookies) {
        this.rooms = Room.all;
        this.messages = Message.all
        this.newMessage = Message.send
        
        this.openModal = function () {
           $uibModal.open({
              templateUrl: '/templates/Modal.html',
              controller: 'ModalCtrl',
              controllerAs: 'Modal'
            });
       };
        
        this.setRoom = function(room){
            this.currentRoom=room;
            this.messages = Message.getByRoomId(this.currentRoom.$id);
            console.log(this.messages);
        };
        
        this.sendMessage = function() {
            this.newMessage.roomId = this.currentRoom.$id;
            this.newMessage.sentAt = firebase.database.ServerValue.TIMESTAMP;
            this.newMessage.username = this.username.$id;
                document.getElementById("textfield").value= "";
                Message.send(this.newMessage);
        }
        
    }

    angular
        .module('bloc-chat')
        .controller('HomeCtrl', ['Room','Message','$uibModal','$cookies', HomeCtrl]);
})();