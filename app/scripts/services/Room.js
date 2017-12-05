(function() {
    function Room($firebaseArray){
        var Room = {};
        var ref = firebase.database().ref().child("Rooms");
        var rooms = $firebaseArray(ref);
        console.log(rooms);
        Room.all = rooms;
        return Room;
        
    }
    
    angular
        .module ('bloc-chat')
        .factory('Room', ['$firebaseArray', Room]);
})();