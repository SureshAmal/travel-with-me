// ThemeService — persists user's theme preference in localStorage
app.factory("ThemeService", [
  "$rootScope",
  function ($rootScope) {
    var STORAGE_KEY = "TravelWithMe-theme";
    var currentTheme = localStorage.getItem(STORAGE_KEY) || "dark";

    // Apply on init
    applyTheme(currentTheme);

    function applyTheme(theme) {
      currentTheme = theme;
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem(STORAGE_KEY, theme);
      $rootScope.currentTheme = theme;
    }

    return {
      getTheme: function () {
        return currentTheme;
      },
      toggleTheme: function () {
        var newTheme = currentTheme === "dark" ? "light" : "dark";
        applyTheme(newTheme);
        return newTheme;
      },
      setTheme: function (theme) {
        applyTheme(theme);
      },
      isDark: function () {
        return currentTheme === "dark";
      },
    };
  },
]);
