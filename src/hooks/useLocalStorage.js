import { useEffect, useState} from "react";

export function useLocalStorage(itemName, inicialValue) {
  const [item, setItem] = useState(inicialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  
  useEffect(()=>{
    setTimeout(() =>{
      try{
        const localStorageItem = localStorage.getItem(itemName);
    
        let parsedItem;
  
        if(!localStorageItem){
          localStorage.setItem(itemName, JSON.stringify(inicialValue))
          parsedItem = inicialValue
        }else{
          parsedItem = JSON.parse(localStorageItem)
          setItem(parsedItem)
        }
        
        setLoading(false)
      }
      catch(error){
        setLoading(false)
        setError(true)
      }
    }, 2000);
  },[])

  const saveItem = (newItem) =>{
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  }

  return {
    item, 
    saveItem, 
    loading, 
    error
  };
}