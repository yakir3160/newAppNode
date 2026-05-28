


export const cleanFieldsFromObj = (fieldsToRemove,obj) =>{
    if (!obj || Object.keys(obj).length === 0 )
         new Error ("Object cannot be empty")
    
    const cleanObj = {...obj};

    fieldsToRemove.map(field => delete cleanObj[field])
    return cleanObj

} 