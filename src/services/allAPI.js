import commonAPI from "./commonAPI";
import serverURL from "./serverURL";

// add resume api :call in UserInputs when finish button is clicked
export const addResumeAPI = async (resumeDetails)=>{
    return await commonAPI("POST",`${serverURL}/resumes`,resumeDetails)
}

// view resume api: