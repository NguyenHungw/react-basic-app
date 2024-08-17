import React, { useEffect, useState } from 'react';
import { Button, Input, Modal, notification } from 'antd';
import { createBookAPI, handleUploadFile, updateBookAPI } from '../../services/api.service';
const BookForm = (props) => {
  //const [isModalOpen, setIsModalOpen] = useState(false);
  const [id,setId] = useState("")
  const [mainText,setMaintext] = useState("")
  const [author,setAuthor] = useState("")

  const [price,setPrice] = useState("")
  const [quantity,setQuantity] = useState("")
  const [category,setCategory] = useState("")
  const [thumbnail,setThumbnail] = useState("")

  const { isUpdateBookModel,setIsUpdateBookModel,dataUpdate,setDataUpdate,loadBook} = props
  const [preview1,setPreview1] = useState(null)
  const [selectedFile,setSelectedFile] = useState(null)


  const handleSelecteFile = (e) => {
    if(!e.target.files || e.target.files === 0){
      setPreview1(null)
      setSelectedFile(null)
      return
    }
    const file = e.target.files[0]
    if(file){
      setSelectedFile(file)
      setPreview1(URL.createObjectURL(file))
    }
  }
  const resetAndCloseModal = async() => {
    setIsUpdateBookModel(false)
    setPreview1(null)
    setSelectedFile(null)
    setPrice("")
    setQuantity("")
    setCategory("")
    setAuthor(null)
    setThumbnail("")
    await loadBook()

  }
  const handleCancel = async() => {
    setIsUpdateBookModel(false)
    setPreview1(null)
    setSelectedFile(null)
    setPrice("")
    setQuantity("")
    setCategory("")
    setAuthor("")
    setThumbnail("")
    await loadBook()
  }
 useEffect(()=>{
  if(dataUpdate){
    // console.log("check data update",dataUpdate)
    setId(dataUpdate._id)
    setMaintext(dataUpdate.mainText)
    setAuthor(dataUpdate.author)
    setPrice(+dataUpdate.price)
    setQuantity(+dataUpdate.quantity)
    setCategory(dataUpdate.category)
    setThumbnail(dataUpdate.thumbnail)
  }
 
 },[dataUpdate])
  const handleOk = async() => {
    const resUpload = await handleUploadFile(selectedFile,"book")
    if(resUpload.data){
      const newImg = resUpload.data.fileUploaded
      const resUpdateBook = await updateBookAPI(id,newImg,mainText, author, price, quantity,category)
      if(resUpdateBook.data){
        await resetAndCloseModal()
        notification.success({
          message:"sucess",
          description:"Cap nhat thanh cong"

        })
      }else{
        notification.error({
          message:"error",
          description:JSON.stringify(resUpdateBook.data.error)
        })
      }
      
    }
  
  };

  return (
    <>
      {/* <Button 
      type="primary" 
      onClick={()=>setIsUpdateBookModel(true)}
      style={{display: "flex", justifyContent: "space-between"}}
      >
        test
      </Button> */}
      <Modal title="Edit Modal" 
       open={isUpdateBookModel} 
      onOk={handleOk}
      // onCancel={()=>{setIsUpdateBookModel(false)}}>
      onCancel={handleCancel}>

<label>Id</label>
      <Input
      value={id}
      onChange={(event)=>{setId(event.target.value)}}
      disabled
      ></Input>
      
      <label>thumbnail</label>
      <Input
      value={thumbnail}
      onChange={(event)=>{setThumbnail(event.target.value)}}
      disabled
      ></Input>
        <div style={{
              marginTop: "10px",
              height: "100px", width: "150px",
              border: "1px solid #ccc"
            }}>
              <img style={{ height: "100%", width: "100%", objectFit: "contain" }}

                src={`${import.meta.env.VITE_BACKEND_URL}/images/book/${thumbnail}`}
              ></img>
              </div>
         <label htmlFor="btnUpload"
             style={
              {
                display: "block",
                width: "fit-content",
                marginTop: "15px",
                padding: "5px 10px",
                background: "orange",
                borderRadius: "5px",
                cursor: "pointer"

              }}
            >
              Upload
            </label>
            <input type='file' hidden id="btnUpload"
            onChange={(e)=>{handleSelecteFile(e)}}
            ></input>
             {preview1 &&
              <>
                <div style={{
                  marginTop: "10px",
                  height: "100px", width: "150px",
                  border: "1px solid #ccc"
                }}>
                  <img style={{ height: "100%", width: "100%", objectFit: "contain" }}

                    src={preview1}
                  ></img>
                </div>
                {/* <Button
                  type="primary"
                 // onClick={handleUpdateUserAvatar}
                >Save</Button> */}
              </>

            }
      <label>Maintext</label>
      <Input
      value={mainText}
      onChange={(event)=>{setMaintext(event.target.value)}}
      >

      </Input>
      <label>Author</label>
      <Input
       value={author}
       onChange={(event)=>{setAuthor(event.target.value)}}
      >

      </Input>
      <label>Price</label>
      <Input
       value={price}
       onChange={(event)=>{setPrice(+event.target.value)}}
      >
      </Input>
      <label>Quantity</label>
      <Input
       value={quantity}
       onChange={(event)=>{setQuantity(+event.target.value)}}
      >
      </Input>
      <label>Category</label>
      <Input
       value={category}
       onChange={(event)=>{setCategory(event.target.value)}}
      ></Input>
      
        
      </Modal>
    </>
  );
};
export default BookForm;