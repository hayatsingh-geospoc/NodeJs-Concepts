


const data = new Promise((res,rej)=> {
    let temp = false;
    if(temp) {
        res()
    } else {
        rej()
    }
})

data.then(()=>{
    console.log('work')
}).catch(()=>{
    console.log('not working')
})