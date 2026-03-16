app.controller('BlogController', ['$scope', 'PostService', function($scope, PostService) {
    // Scroll to top
    window.scrollTo(0, 0);

    $scope.allPosts = PostService.getAllPosts();
    $scope.categories = ['all'].concat(PostService.getCategories());
    
    $scope.searchQuery = '';
    $scope.selectedCategory = 'all';

    $scope.setCategory = function(category) {
        $scope.selectedCategory = category;
    };

    // Custom filter function for posts
    $scope.postFilter = function(post) {
        // Filter by category
        if ($scope.selectedCategory !== 'all' && post.category !== $scope.selectedCategory) {
            return false;
        }
        
        // Filter by search query
        if ($scope.searchQuery) {
            var query = $scope.searchQuery.toLowerCase();
            return post.title.toLowerCase().indexOf(query) !== -1 || 
                   post.location.toLowerCase().indexOf(query) !== -1 ||
                   post.excerpt.toLowerCase().indexOf(query) !== -1;
        }
        
        return true;
    };
}]);
