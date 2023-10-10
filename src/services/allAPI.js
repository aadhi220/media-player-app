import { commonAPI } from "./commonAPI"
import { serverURL } from "./serverURL"


export const uploadVideo = async (body)=> {
    // call post http reqest to http://localhost:4000/videos to add video in json server
//return response to add component
    return await commonAPI("POST",`${serverURL}/videos`,body)
}

//get all videos 

export const getAllVideos = async ()=>{
       // call get http reqest to http://localhost:4000/videos to get videos from json server
//return response to view component
return await commonAPI("GET",`${serverURL}/videos`,"")
}

//get a single video 

export const getvideo =async (id)=>{
       // call get http reqest to http://localhost:4000/videos/id to get video from json server
//return response to videocard component
return await commonAPI("GET",`${serverURL}/videos/${id}`,"")
}

export const deleteVideo = async (id)=> {
    // call delete http reqest to http://localhost:4000/videos/id to remove video from json server
//return response to videocard component
return await commonAPI("DELETE",`${serverURL}/videos/${id}`,{}) 
}

export const addCategory = async (body)=> {
       // call post http reqest to http://localhost:4000/categories/ to add categorie to  json server
//return response to Category component
return await commonAPI("POST",`${serverURL}/categories`,body)  
}

export const deleteCategory = async (id)=> {
        // call delete http reqest to http://localhost:4000/categories/id to remove a category from json server
//return response to Category component
return await commonAPI("DELETE",`${serverURL}/categories/${id}`,"") 
}

// export const watchHistory = async ()=> {
//            // call get http reqest to http://localhost:4000/videos to get history from json server
// //return response to view component
// return await commonAPI("GET",`${serverURL}/videos`,"")
// }
