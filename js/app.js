var app = angular.module("travelBlogApp", [
  "ngRoute",
  "ngAnimate",
  "ngSanitize",
]);

app.config([
  "$routeProvider",
  "$locationProvider",
  function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when("/", {
        templateUrl: "views/home.html",
        controller: "HomeController",
      })
      .when("/blog", {
        templateUrl: "views/blog.html",
        controller: "BlogController",
      })
      .when("/blog/:postId", {
        templateUrl: "views/post.html",
        controller: "PostController",
      })
      .when("/about", {
        templateUrl: "views/about.html",
        controller: "AboutController",
      })
      .otherwise({
        templateUrl: "views/notfound.html",
      });
  },
]);

// Global Controller for Navigation + Theme
app.controller("NavController", [
  "$scope",
  "$location",
  "ThemeService",
  function ($scope, $location, ThemeService) {
    $scope.isMenuOpen = false;
    $scope.isDark = ThemeService.isDark();

    $scope.toggleMenu = function () {
      $scope.isMenuOpen = !$scope.isMenuOpen;
    };

    $scope.closeMenu = function () {
      $scope.isMenuOpen = false;
    };

    $scope.isActive = function (viewLocation) {
      if (viewLocation === "/") {
        return $location.path() === "/";
      }
      return $location.path().indexOf(viewLocation) === 0;
    };

    $scope.toggleTheme = function () {
      ThemeService.toggleTheme();
      $scope.isDark = ThemeService.isDark();
    };
  },
]);

// Directive: handles image load/error for skeleton loading
app.directive("imgOnLoad", function () {
  return {
    restrict: "A",
    link: function (scope, element) {
      element.on("load", function () {
        element.addClass("loaded");
        element.parent().removeClass("skeleton-loading");
      });
      element.on("error", function () {
        element.addClass("loaded");
        element.parent().removeClass("skeleton-loading");
        element
          .parent()
          .css(
            "background",
            "linear-gradient(135deg, var(--bg-card) 0%, var(--border-color) 100%)",
          );
      });
    },
  };
});
