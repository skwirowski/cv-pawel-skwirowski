(function () {
  const date = new Date().toLocaleString("en-us", {
    month: "long",
    year: "numeric",
  });

  const htmlElement1 = document.getElementById("footer-page-1");
  const htmlElement2 = document.getElementById("footer-page-2");
  htmlElement1.innerHTML = date;
  htmlElement2.innerHTML = date;
})();
