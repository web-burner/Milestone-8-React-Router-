
const getFromLS = ()=>{
    const appsJson = localStorage.getItem('Apps');
    if(appsJson){
        return JSON.parse(appsJson)
    }else{
        return []
    }
}

const addToLS = (data)=>{
    setToLS(JSON.stringify(data))

}

const setToLS = (data)=>{
    localStorage.setItem('Apps',data)
}

const removeFromLS = (id)=>{
    const updatedData = getFromLS().filter(app => app.id !== id);
    setToLS(JSON.stringify(updatedData))
}

export{
    addToLS,
    getFromLS ,
    removeFromLS
}