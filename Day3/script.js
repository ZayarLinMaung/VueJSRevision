let request = new XMLHttpRequest();
request.addEventListener("readystatechange", function () {
  if (request.readyState === 4) {
    if (request.status === 200) {
      console.log(request.responseText);
    } else {
      console.log("Wrong Link");
    }
  } else {
    console.log("Not ready");
  }
});
request.open("GET", "https://jsonplaceholder.typicode.com/todos");
request.send();
