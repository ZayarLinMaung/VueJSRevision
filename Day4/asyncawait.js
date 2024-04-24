let getJson = async ()=>{
   let response = await fetch("zlm.json");
//    console.log(response);
   let data = await response.json(); 
   return data;
}
getJson()
.then((data)=>{
    console.log(data);
})