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