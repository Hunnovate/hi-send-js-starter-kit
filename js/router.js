document.addEventListener("DOMContentLoaded", () => {
  const routes = {
    "": "pages/login.html",
    "#login": "pages/login.html",
    "#signup": "pages/signup.html",
    "#forgot-password": "pages/forgot-password.html",
    "#reset-password": "pages/reset-password.html",
    "#dashboard": "pages/dashboard.html",
    "#profile": "pages/profile.html"
  };

  function loadPage() {
    const path = routes[location.hash] || routes[""];
    fetch(path)
      .then(res => res.text())
      .then(html => {
        document.getElementById("app").innerHTML = html;
      });
  }

  window.addEventListener("hashchange", loadPage);
  loadPage();
});
