app.controller('PostController', ['$scope', '$routeParams', 'PostService', '$location', function ($scope, $routeParams, PostService, $location) {
    window.scrollTo(0, 0);

    var postId = $routeParams.postId;
    $scope.post = PostService.getPostById(postId);

    if (!$scope.post) {
        $location.path('/blog');
    }
}]);
