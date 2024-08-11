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

const fetchAllUserAPI = (current,pageSize) => {
    const URL_BACKEND = `/api/v1/user?current=${current}&pageSize=${pageSize}`;

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
    const URL_BACKEND = `/api/v1/file/upload`;


    let config = {
        headers: {
            "upload-type": folder,
            "Content-Type": 'multipart/form-data' //neu nhu ko co dong nay trinh duyet se hieu la dang gui 1 chuoi string

        }

    }
    const bodyFormData = new FormData();
    //ten bien fileImg giong trong phan body cua api
    bodyFormData.append("fileImg", file)

    return axios.post(URL_BACKEND, bodyFormData, config)
}
const updateUserAvatarAPI = (avatar,_id,fullName,phone ) => {
    const URL_BACKEND = "/api/v1/user";
    const data = {
        _id: _id,
        avatar: avatar,
        fullName: fullName,
        phone: phone
    }
    return axios.put(URL_BACKEND, data)
}
const registerUserAPI = (fullName, email, password, phone) => {
    const URL_BACKEND = "/api/v1/user/register";
    const data = {
        fullName: fullName,
        email: email,
        password: password,
        phone: phone

    }
    return axios.post(URL_BACKEND, data)
}
const loginUserAPI = (username, password) => {
    const URL_BACKEND = "/api/v1/auth/login";
    const data = {
        username: username,
    
        password: password,
        delay: 1000,

    }
    return axios.post(URL_BACKEND, data)
}
const getAccountAPI = () => {
    const URL_BACKEND = "/api/v1/auth/account";
   
    return axios.get(URL_BACKEND)
}
const logOuttAccountAPI = () => {
    const URL_BACKEND = "/api/v1/auth/logout";
   
    return axios.post(URL_BACKEND)
}

//book with paginate
//get
const getAllBook = (current,pageSize) => {
    const URL_BACKEND = `/api/v1/book?current=${current}&pageSize=${pageSize}`;

    return axios.get(URL_BACKEND)
}
//create
const createBookAPI = (thumbnail,mainText, author, price, quantity,category) => {
    const URL_BACKEND = "/api/v1/book";
    const data = {
        thumbnail:thumbnail,
        mainText: mainText,
        author: author,
        price: price,
        quantity: quantity,
        category:category

    }
    return axios.post(URL_BACKEND, data)
}

//update
const updateBookAPI = (_id,thumbnail, author, price, quantity,category) => {
    const URL_BACKEND = "/api/v1/book";
    const data = {
        thumbnail: thumbnail,
        author: author,
        price: price,
        quantity: quantity,
        category:category

    }
    return axios.put(URL_BACKEND, data)
}

//delete
const deleteBookAPI = (id) => {
    const URL_BACKEND = `/api/v1/book/${id}`;
    return axios.delete(URL_BACKEND)
}
export {
    createUserAPI, updateUserAPI, fetchAllUserAPI, deleteUserAPI, handleUploadFile,
     updateUserAvatarAPI,registerUserAPI,loginUserAPI,getAccountAPI,logOuttAccountAPI,
     getAllBook,createBookAPI,updateBookAPI,deleteBookAPI
}