app.controller('PostController', ['$scope', '$routeParams', 'PostService', '$location', function($scope, $routeParams, PostService, $location) {
    // Scroll to top
    window.scrollTo(0, 0);

    var postId = $routeParams.postId;
    $scope.post = PostService.getPostById(postId);

    // If post not found, redirect to blog
    if (!$scope.post) {
        $location.path('/blog');
    }
}]);
