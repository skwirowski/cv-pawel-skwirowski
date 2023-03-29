(function () {
  const date = new Date().toLocaleString("en-us", {
    month: "long",
    year: "numeric",
  });

  const htmlElement = document.getElementById("footer");
  htmlElement.innerHTML = date;
})();
