import axios from "./axios.customize";

const createUserAPI = (fullName, email, password, phone) => {
    const URL_BACKEND = "/api/v1/user";
    const data = {
        fullName: fullName,
        email: email,
        password: password,
        phone: phone

    }
    return axios.post(URL_BACKEND, data)
}

const fetchAllUserAPI = () => {
    const URL_BACKEND = "/api/v1/user";

    return axios.get(URL_BACKEND)
}

const updateUserAPI = (_id, fullName, phone) => {
    const URL_BACKEND = "/api/v1/user";
    const data = {
        _id: _id,
        fullName: fullName,
        phone: phone

    }
    return axios.put(URL_BACKEND, data)
}
const deleteUserAPI = (id) => {
    const URL_BACKEND = `/api/v1/user/${id}`;
    return axios.delete(URL_BACKEND)
}
const handleUploadFile = (file, folder) => {
    const URL_BACKEND = `/file/upload`;
    

    let config = {
        headers: {
            "upload-type": folder,
            "Content-Type": 'multipart/form-data' //neu nhu ko co dong nay trinh duyet se hieu la dang gui 1 chuoi string

        }

    }
    const bodyFormData = new FormData();
    //ten bien fileImg giong trong phan body cua api
    bodyFormData.append("fileImg",file)

    return axios.post(URL_BACKEND, bodyFormData, config)
}

export {
    createUserAPI, updateUserAPI, fetchAllUserAPI, deleteUserAPI,handleUploadFile
}