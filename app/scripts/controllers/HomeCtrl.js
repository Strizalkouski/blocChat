(function() {
    function HomeCtrl(Room, $uibModal) {
        this.rooms = Room.all;
        this.openModal = function () {
           $uibModal.open({
              templateUrl: '/templates/Modal.html',
              controller: 'ModalCtrl',
              controllerAs: 'Modal'
            });
       };
    }

    angular
        .module('bloc-chat')
        .controller('HomeCtrl', ['Room','$uibModal', HomeCtrl]);
})();