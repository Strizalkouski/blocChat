(function() {
    function CookieCtrl ($uibModalInstance, $cookies) {
        this.setUserName = function() {
            $cookies.put('blocChatCurrentUser', this.username)
            $uibModalInstance.close();
        }
    };
    
angular
    .module('bloc-chat')
    .controller('CookieCtrl', ['$uibModalInstance', '$cookies', CookieCtrl]);
})();