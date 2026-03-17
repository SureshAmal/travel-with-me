app.controller("HomeController", [
  "$scope",
  "PostService",
  function ($scope, PostService) {
    $scope.featuredPosts = PostService.getFeaturedPosts();

    // Some static hero data could go here
    $scope.heroTitle = "Discover The World";
    $scope.heroSubtitle = "Explore. Dream. Discover.";
    $scope.heroText =
      "Join me on a journey to the most breathtaking corners of the earth. From bustling cityscapes to serene mountain peaks.";
  },
]);
