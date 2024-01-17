


const data = new Promise((res,rej)=> {
    let temp = true;
    if(temp) {
        res()
    } else {
        rej()
    }
})

data.then((res)=>{
    console.log(res)
}).catch((rej)=>{
    console.log(rej)
})