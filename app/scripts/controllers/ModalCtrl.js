(function() {
    function ModalCtrl(Room,$uibModalInstance) {
        
        this.cancel = function() {
            $uibModalInstance.close();
            console.log("cancel");
        };
        
        this.submit = function() {
           
            Room.add(this.roomName);
            
            $uibModalInstance.close();
        };
    }
    
    angular
        .module ('bloc-chat')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl ]);
})();