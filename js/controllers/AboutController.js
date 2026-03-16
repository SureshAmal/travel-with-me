app.controller('AboutController', ['$scope', function ($scope) {
    // Scroll to top
    window.scrollTo(0, 0);

    $scope.author = {
        name: "Suresh Amal",
        role: "Travel Enjoyer",
        bio: "I am a software developer. I love to travel to different place.",
    };
}]);
