function fetchingUserData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            success=false;
            if(success){
                resolve("data successfully fetched");
            }else{
                reject("data failed to fetch")
            }
        },2000)
    })
}

fetchingUserData()
    .then((data)=> console.log(data))
    .catch((err)=> console.log(err))