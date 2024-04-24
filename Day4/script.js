fetch("zlm.json")
.then((response)=>{
    // console.log("resolved", response);
    // return response.json();
    if(response.status===404){
        throw new Error("Invalid Link");
    }
    else if(response.status===200){
        return response.json();
    }
})
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err.message);
})