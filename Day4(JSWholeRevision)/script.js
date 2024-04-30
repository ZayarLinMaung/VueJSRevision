let request = new XMLHttpRequest();
request.addEventListener("readystatechange", () => {
  console.log(request.responseText);
});
request.open("");
