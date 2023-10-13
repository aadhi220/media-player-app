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

export const saveCategory = async (body)=> {
       // call post http reqest to http://localhost:4000/categories/ to add categorie to  json server
//return response to Category component
return await commonAPI("POST",`${serverURL}/categories`,body)  
}

export const getCategory = async ()=> {
    // call post http reqest to http://localhost:4000/categories/ to add categorie to  json server
//return response to Category component
return await commonAPI("GET",`${serverURL}/categories`,"")  
}
// update category from json server
export const updateCategory = async (id,body)=> {
    // call post http reqest to http://localhost:4000/categories/id to update   categories from   json server
//return response to Category component
return await commonAPI("PUT",`${serverURL}/categories/${id}`,body)  
}





export const deleteCategory = async (id)=> {
        // call delete http reqest to http://localhost:4000/categories/id to remove a category from json server
//return response to Category component
return await commonAPI("DELETE",`${serverURL}/categories/${id}`,{}) 
}

export const PostWatchHistory = async (videoHistory)=> {
           // call post http reqest to http://localhost:4000/videos to store video history to json server
//return response to videocard component
return await commonAPI("POST",`${serverURL}/history`,videoHistory)
}

export const getWatchHistory = async ()=> {
    // call get http reqest to http://localhost:4000/videos to get history from json server
//return response to view component
return await commonAPI("GET",`${serverURL}/history`,"")
}

// delete history from watch history

export const deleteWatchHistory = async (id)=> {
    // call delete http reqest to http://localhost:4000/watch history to delete a history from json server
//return response to watchhistory component
return await commonAPI("DELETE",`${serverURL}/history/${id}`,{})
}


