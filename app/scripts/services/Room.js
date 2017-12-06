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
        return Room;
        
    }
    
    angular
        .module ('bloc-chat')
        .factory('Room', ['$firebaseArray', Room]);
})();