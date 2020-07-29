export const storeToLocalStorage = (key, value)=>{
    return localStorage.setItem(key, value);
}

export const readFromLocalStorage = (key)=>{
    let value = localStorage.getItem(key);
    return value;
}


export const deleteFromLocalStorage = (key)=>{
   localStorage.removeItem(key);
}