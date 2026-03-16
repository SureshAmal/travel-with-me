app.controller('AboutController', ['$scope', function($scope) {
    // Scroll to top
    window.scrollTo(0, 0);

    $scope.author = {
        name: "Alex Wanderer",
        role: "Travel Photographer & Writer",
        bio: "I'm a passionate traveler on a mission to explore every corner of the globe. For the past 5 years, I've been living out of a backpack, documenting my journey through photography and stories. My goal is to inspire others to step out of their comfort zones and experience the beauty the world has to offer.",
        stats: [
            { label: "Countries Visited", value: "42" },
            { label: "Flights Taken", value: "128" },
            { label: "Photos Taken", value: "50k+" },
            { label: "Cups of Coffee", value: "1,200" }
        ],
        image: "https://images.unsplash.com/photo-1552632284-5f2c418a0921?q=80&w=1964&auto=format&fit=crop"
    };
}]);
