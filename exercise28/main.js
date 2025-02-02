function successMessage(){

    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            const success=true;
            if(success){
                resolve("Success message displayed");
            } else{
                reject("Failed to display success message")
            }
        },2000)
    })
}

    async function displaySuccessMessage(){
        try{
            const message = await successMessage();
            console.log(message);
        }catch(err){
            console.log(err);
        }
    }

    displaySuccessMessage();