import {URL} from './config'

// retrival of data (admin)
export const retrieveProducts = async () =>{
    const res = await fetch(`${URL}`,{
        method: 'GET',
        headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })

    return await res.json()
}

export const retrieveProductsByPage = async (page) =>{
    const res = await fetch(`${URL}/products/?page=${page}`,{
        method: 'GET',
        headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })

    return await res.json()
}


// add, edit, delete
// DML = Data Manipulation Language
export const DMLProfiles = async (inputs, type) =>{
    const res = await fetch(`${URL}/products/`,{
        method: type,
        headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(inputs)
    })

    return await res.json()
}