let request = new XMLHttpRequest();
let reCall = function(resource){
  return new Promise((resolve, reject)=>{
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
    request.open("GET", resource);
    request.send();
  })
}
reCall("zlm.json")
.then((data)=>{
  console.log(data);
})
.catch((error)=>{
  console.log(error);
})