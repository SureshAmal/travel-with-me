app.controller("PostController", [
  "$scope",
  "$routeParams",
  "PostService",
  "$location",
  function ($scope, $routeParams, PostService, $location) {
    var postId = $routeParams.postId;
    $scope.post = PostService.getPostById(postId);

    if (!$scope.post) {
      $location.path("/blog");
    }
  },
]);
