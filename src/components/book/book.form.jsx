import React, { useState } from 'react';
import { Button, Input, Modal, notification } from 'antd';
import { createBookAPI, handleUploadFile } from '../../services/api.service';
const BookForm = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mainText, setMaintext] = useState("")
  const [author, setAuthor] = useState("")

  const [price, setPrice] = useState("")
  const [quantity, setQuantity] = useState("")
  const [category, setCategory] = useState("")
  //const [thumbnail, setThumbnail] = useState("")

  const [selectedFile,setSelectedFile] = useState(null)
  const [preview,setPreview] = useState(null)

  const handleSelecteFile = (e) =>{
    if(!e.target.files || e.target.files===0){
      setSelectedFile(null)
      setPreview(null)
      return
    }
    const file = e.target.files[0]
    if(file){
      setSelectedFile(file)
      setPreview(URL.createObjectURL(file))

     
    }
    console.log(preview)
    console.log(selectedFile)
  }
  const {
    dataBook,
    setDataBook,
    current,
    setCurrent,
    pageSize,
    setPageSize,
    total,
    loadBook
  } = props

  const resetAndCloseModal = async() => {
    setIsModalOpen(false)
    setPrice("")
    setAuthor("")
    setQuantity("")
    setMaintext("")
    setCategory("")
    setPreview(null)
    setSelectedFile(null)
    // setThumbnail("")
    await loadBook()
  }

  

  const handleOk = async () => {
    const resUpload = await handleUploadFile(selectedFile,"book")
    if(resUpload.data){
      const thumbnail = resUpload.data.fileUploaded
      const resUpdateImgBook = await createBookAPI(thumbnail,mainText,author, price, quantity, category)
      if(resUpdateImgBook.data){
        await resetAndCloseModal()
        
        notification.success({
          message:"Uploaded",
          description:"Thêm mới thành công "
        })
      }else{
        notification.error({
          message:"Error",
          description: JSON.stringify(resUpdateImgBook.error.data)
        })
      }
    }
  };

  return (
    
      <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>

        <div style={{ display: "flex", justifyContent: "space-between" }} >
        <h2>Table Book</h2>
          <Button
            type="primary"
            onClick={() => setIsModalOpen(true)}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"

            }}
          >
            Create Book
          </Button>
          
          <Modal title="Basic Modal"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={() => { setIsModalOpen(false) }}>
            <label>thumbnail</label>
            
           
            {/* <div style={{
              marginTop: "10px",
              height: "100px", width: "150px",
              border: "1px solid #ccc"
            }}>
              <img style={{ height: "100%", width: "100%", objectFit: "contain" }}

                src={`${import.meta.env.VITE_BACKEND_URL}/images/book/${dataViewDetail.thumbnail}`}
              ></img>
            </div> */}
            {/* <Input
            disabled
              value={thumbnail}
              onChange={(event) => { setThumbnail(event.target.value) 
                
              }}

            ></Input> */}
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
            >
            </input>
            {preview &&
            <>
             <div style={{
                  marginTop: "10px",
                  height: "100px", width: "150px",
                  border: "1px solid #ccc"
                }}>
                  <img style={{ height: "100%", width: "100%", objectFit: "contain" }}

                    src={preview}
                  ></img>
                </div>
            </>
            }
            <label>Maintext</label>
            <Input
              value={mainText}
              onChange={(event) => { setMaintext(event.target.value) }}
            >
            </Input>
            <label>Author</label>
            <Input
              value={author}
              onChange={(event) => { setAuthor(event.target.value) }}
            >
            </Input>
            <label>Price</label>
            <Input
              value={price}
              onChange={(event) => { setPrice(+event.target.value) }}
            >
            </Input>
            <label>Quantity</label>
            <Input
              value={quantity}
              onChange={(event) => { setQuantity(+event.target.value) }}
            >
            </Input>
            <label>Category</label>
            <Input
              value={category}
              onChange={(event) => { setCategory(event.target.value) }}
            >
            </Input>
          
          </Modal>
        </div>
        </div>
        );
};
        export default BookForm;