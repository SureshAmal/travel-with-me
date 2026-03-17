app.controller("BlogController", [
  "$scope",
  "PostService",
  function ($scope, PostService) {
    var allPosts = PostService.getAllPosts();

    $scope.categories = ["all"].concat(PostService.getCategories());
    $scope.searchQuery = "";
    $scope.selectedCategory = "all";
    $scope.filteredPosts = allPosts;

    function applyFilters() {
      var category = $scope.selectedCategory;
      var query = ($scope.searchQuery || "").toLowerCase();

      $scope.filteredPosts = allPosts.filter(function (post) {
        if (category !== "all" && post.category !== category) {
          return false;
        }
        if (query) {
          return (
            post.title.toLowerCase().indexOf(query) !== -1 ||
            post.location.toLowerCase().indexOf(query) !== -1 ||
            post.excerpt.toLowerCase().indexOf(query) !== -1
          );
        }
        return true;
      });
    }

    $scope.setCategory = function (category) {
      $scope.selectedCategory = category;
      applyFilters();
    };

    $scope.$watch("searchQuery", function () {
      applyFilters();
    });
  },
]);
