import commonAPI from "./commonAPI";
import serverURL from "./serverURL";

// add resume api :call in UserInputs when finish button is clicked(post to create)
export const addResumeAPI = async (resumeDetails)=>{
    return await commonAPI("POST",`${serverURL}/resumes`,resumeDetails)
}

// view resume api: call in viewResume when page load-useEffect
export const viewResumeAPI = async (id)=>{
    return await commonAPI("GET",`${serverURL}/resumes/${id}`,{})
}

// update api:call by edit component when update btn is clicked(put to update)
export const editResumeAPI = async (id,resumeDetails)=>{
    return await commonAPI("PUT",`${serverURL}/resumes/${id}`,resumeDetails)
}

// add history api: called by viewresume when download button clicked
export const addHistoryAPI = async (resumeHistory)=>{
    return await commonAPI("POST",`${serverURL}/history`,resumeHistory)
}

// view history api:call when history page load
export const viewHistoryAPI = async ()=>{
    return await commonAPI("GET",`${serverURL}/history`,{})
}

// remove history api:called by history when delete btn clicked
export const removeHistoryAPI = async (id)=>{
    return await commonAPI("DELETE",`${serverURL}/history/${id}`,{})
}
