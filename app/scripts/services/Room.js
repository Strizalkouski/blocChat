(function() {
    function Room($firebaseArray){
        var Room = {};
        var ref = firebase.database().ref().child("Rooms");
        var rooms = $firebaseArray(ref);
        Room.all = rooms;
        
        
        Room.add = function(room){
            //Firebase method $add
            rooms.$add(room);
        }
        
        Room.delete = function(room){
            rooms.$delete(room);
        }
        
        return Room;
        
    }
    
    angular
        .module ('bloc-chat')
        .factory('Room', ['$firebaseArray', Room]);
})();