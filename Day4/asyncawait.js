let getJson = async ()=>{
   let response = await fetch("zlm.json");
//    console.log(response);
   
   if(response.status===404){
    throw new Error("Invalid link")
   }
   let data = await response.json(); 
   return data;
}
getJson()
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error.message);
})