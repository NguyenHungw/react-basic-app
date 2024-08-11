import React, { useState } from 'react';
import { Button, Input, Modal, notification } from 'antd';
import { createBookAPI } from '../../services/api.service';
const BookForm = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mainText,setMaintext] = useState("")
  const [author,setAuthor] = useState("")

  const [price,setPrice] = useState("")
  const [quantity,setQuantity] = useState("")
  const [category,setCategory] = useState("")
  const [thumbnail,setThumbnail] = useState("")

  const resetAndCloseModal = () => {
    setIsModalOpen(false)
    setPrice("")
    setQuantity("")
    setCategory("")
    setThumbnail("")
  }
const {loadBook} = props
  const handleOk = async() => {
    console.log("check data",thumbnail,mainText, author, price, quantity,category)
    const res = await createBookAPI(thumbnail,mainText, author, price, quantity,category)
    console.log(res)
    if(res.data){
      notification.success({
        message:"thêm mới thành công",
        description:"ok"
      })
      resetAndCloseModal()

      await loadBook()

    }else{
      notification.error({
        message:"thêm mới thất bại",
        description: JSON.stringify(res.message)
      })
    }
  };

  return (
    <>
      <Button 
      type="primary" 
      onClick={()=>setIsModalOpen(true)}
      style={{display: "flex", justifyContent: "space-between"}}
      >
        Create Product
      </Button>
      <Modal title="Basic Modal" 
      open={isModalOpen} 
      onOk={handleOk} 
      onCancel={()=>{setIsModalOpen(false)}}>

      
      <label>thumbnail</label>
      <Input
      value={thumbnail}
      onChange={(event)=>{setThumbnail(event.target.value)}}
      ></Input>
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