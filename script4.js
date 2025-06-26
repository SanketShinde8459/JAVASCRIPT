
function saveToDb(data){
    let networkSpeed = Math.floor(Math.random() * 100) + 1;
    let dbSaveTime = Math.floor(Math.random() * 1000) + 1;
 
    return new Promise((resolve , reject)=>{
        setTimeout( () => {
            if(networkSpeed > 55){
                // console.log("data save to db");
                resolve("data saved successfully");
            }else{
                // console.log("data not saved to db");
                reject ("data not saved to db due to slow network speed");
            }
        },1000)
    })
}

saveToDb("Pune")
      .then((msg)=>{
        console.log(msg);
      })
      .catch((error)=>{
        console.log(error);
      });