
(function() {
    function HomeCtrl(Room, Message, $uibModal, $cookies) {
        this.rooms = Room.all;
        this.messages = null;
        this.newMessage = {};
        
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
        };
        
        
        this.sendMessage = function() {
            this.newMessage.roomId = this.currentRoom.$id;
            this.newMessage.sentAt = firebase.database.ServerValue.TIMESTAMP;
            this.newMessage.username = $cookies.get('blocChatCurrentUser');
            console.log(this.newMessage);
                Message.send(this.newMessage);
                this.newMessage.content="";
                
            
        }
        
    }

    angular
        .module('bloc-chat')
        .controller('HomeCtrl', ['Room','Message','$uibModal','$cookies', HomeCtrl]);
})();