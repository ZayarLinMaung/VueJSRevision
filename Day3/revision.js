let request = new XMLHttpRequest();
let recall = (resource)=>{ //callback)=>{
    return new Promise((resolve,reject)=>{
        request.addEventListener("readystatechange",()=>{
            if(request.readyState===4 && request.status===200){
                // console.log(request.responseText)
                let data = JSON.parse(request.responseText)
                // callback(data,undefined)
                resolve(data)
            }
            else if(request.status===404){
                // callback(undefined,"Sth went wrong")
                reject("sth went wrong")
            }
        })
        request.open("GET",resource);
        request.send();
    })
}
// recall((data,error)=>{
//     if(data){
//         console.log(data);
//     }
//     else{
//         console.log(error);
//     }
// })
recall("zlm.json")
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
});