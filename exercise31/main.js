async function getData() {
    try{
        const response = await fetch('http://jsonplaceholder.typicode.com/users')
        if(!response.ok){
            throw new error('HTTP error:${response.status}')
          
    }
    const users = await response.json();
    console.log('Users: ', users);
    
}catch(error){
    console.log(error);
}
}
getData();
