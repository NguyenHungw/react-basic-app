import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Input, InputNumber, Modal, notification, Row, Select } from 'antd';
import { createBookAPI, handleUploadFile, updateBookAPI } from '../../services/api.service';
import { useForm } from 'antd/es/form/Form';
const UpdateBookFormUncontroll = (props) => {
  //const [isModalOpen, setIsModalOpen] = useState(false);
  //const [id, setId] = useState("")


  const { isUpdateBookModel, setIsUpdateBookModel, dataUpdate, setDataUpdate, loadBook } = props
  const [preview, setPreview] = useState(null)
  const [selectedFile, setSelectedFile] = useState(null)

  const [form] = useForm()

  const handleSelecteFile = (e) => {
    if (!e.target.files || e.target.files === 0) {
      setPreview(null)
      setSelectedFile(null)
      return
    }
    const file = e.target.files[0]
    if (file) {
      setSelectedFile(file)
      setPreview(URL.createObjectURL(file))
    }
  }
  const resetAndCloseModal = async () => {
    form.resetFields()

    setIsUpdateBookModel(false)
    setPreview(null)
    setSelectedFile(null)

    await loadBook()

  }
  const handleCancel = async () => {
    form.resetFields()

    setIsUpdateBookModel(false)
    setPreview(null)
    setSelectedFile(null)

    await loadBook()
  }

  useEffect(() => {
    if (dataUpdate) {
      
      console.log("check data update",dataUpdate)
      //setId(dataUpdate._id)
      form.setFieldsValue({
        _id: dataUpdate._id,
        mainText: dataUpdate.mainText,
        author: dataUpdate.author,
        price: +dataUpdate.price,
        quantity: +dataUpdate.quantity,
        category: dataUpdate.category,
        thumbnail: dataUpdate.thumbnail
      })

      setPreview(`${import.meta.env.VITE_BACKEND_URL}/images/book/${dataUpdate.thumbnail}`)
    }


  }, [dataUpdate])
  //console.log("check preview", preview)
  //console.log("check dataUpdate.thumbnail>", dataUpdate.thumbnail)



  const updateBook = async (newThumbnail,values) => {
    
    // const { _id, mainText, author, price, quantity, category } = values;
    // const res = await updateBookAPI(_id, newThumbnail, mainText, author, price, quantity, category)
    const res = await updateBookAPI(values._id, newThumbnail, values.mainText, values.author, values.price, values.quantity, values.category)

/*     const res = await updateBookAPI(id, newThumbnail, values.mainText, values.author, values.price, values.quantity, values.category)
 */    if (res.data) {
      await resetAndCloseModal()

      notification.success({
        message: "success",
        description: "Cap nhat thanh cong"

      })
    }
    else {
      console.log("check id error",values)

      notification.error({
        message: "error",
        description: JSON.stringify(res.data.error)
      })
    }
  }
  //

  const onFinish = async (values) => {
    //không có ảnh preview + không có file => return
    console.log("check values>>",values)
    if (!selectedFile && !preview) {
      await resetAndCloseModal()
      notification.error({
        message: "Error update book",
        description: "Vui lòng upload ảnh thumbnail"
      })
      return;
    }

    let newThumbnail = "";
    //có ảnh preview và không có file => không upload file
    if (!selectedFile && preview) {
      //do nothing
      newThumbnail = dataUpdate.thumbnail;
    } else {
      //có ảnh preview và có file => upload file?
      const resUpload = await handleUploadFile(selectedFile, "book");
      if (resUpload.data) {
        //success
        newThumbnail = resUpload.data.fileUploaded;
      } else {
        //failed
        notification.error({
          message: "Error upload file",
          description: JSON.stringify(resUpload.message)
        });
        return;
      }
    }

    //step 2: update book
    await updateBook(newThumbnail,values);
  };

  //console.log( "check dataupdate.thumbnail",dataUpdate.thumbnail)
  return (
    <>

      <Modal title="Edit Modal"
        open={isUpdateBookModel}
        onOk={() => { form.submit() }}

        onCancel={resetAndCloseModal}>


        <Form
          form={form}

          onFinish={onFinish}

          layout='vertical'
        >
          <Row justify={"center"} >


            {/* Thumnail */}
            <Col xs={24} md={16} lg={20} >

              <Form.Item layout='vertical'
                label="thumbnail"
                name="thumbnail"
              >
                <div style={{
                  marginTop: "10px",
                  height: "100px", width: "150px",
                  border: "1px solid #ccc"
                }}>
                  <img style={{ height: "100%", width: "100%", objectFit: "contain" }}
                  
                    //  src={`${import.meta.env.VITE_BACKEND_URL}/images/book/${dataUpdate.thumbnail}`
                    {...dataUpdate&&
                    <>
                      src={`${import.meta.env.VITE_BACKEND_URL}/images/book/${dataUpdate.thumbnail}`}
                    </>
                    }
                  >

                    
                  </img>
                
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

                <input
                  type='file'
                  hidden
                  style={{ display: "none" }} // Bạn có thể dùng style để ẩn

                  id="btnUpload"
                  onChange={(e) => { handleSelecteFile(e) }}
                  onClick={(e) => {
                    e.target.value = null
                  }}
                ></input>
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
              </Form.Item>

              <Form.Item layout='vertical'
                label="id"
                name="_id"

              >
                <Input disabled />
              </Form.Item>
              <Form.Item layout='vertical'
                label="mainText"
                name="mainText"
                rules={[
                  {
                    required: true,
                    message: 'Please input your mainText!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item layout='vertical'
                label="author"
                name="author"
                rules={[
                  {
                    required: true,
                    message: 'Please input your author!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item layout='vertical'
                label="price"
                name="price"
                rules={[
                  {
                    required: true,
                    message: 'Please input your price!',
                  },
                ]}
              >
                <InputNumber style={{ width: 393 }} min={1} max={999999999999} defaultValue={0} />
              </Form.Item>
              <Form.Item
                layout='vertical'
                label="quantity"
                name="quantity"
                rules={[
                  {
                    required: true,
                    message: 'Please input your quantity!',
                  },
                ]}
              >

                <InputNumber style={{ width: 393 }} min={1} max={999999999999} defaultValue={0} />
              </Form.Item>
              <Form.Item
                name="category"
                label="Category"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  placeholder="Select a option and change input text above"
                  // onChange={(value) => { setCategory(value) }}
                  allowClear
                  options={[
                    { value: 'null', label: '_________' },
                    { value: 'Arts', label: 'Arts' },
                    { value: 'Business', label: 'Business' },
                    { value: 'Comics', label: 'Comics' },
                    { value: 'Cooking', label: 'Cooking' },
                    { value: 'Entertainment', label: 'Entertainment' },
                    { value: 'History', label: 'History' },
                    { value: 'Music', label: 'Music' },
                    { value: 'Sports', label: 'Sports' },
                    { value: 'Teen', label: 'Teen' },
                    { value: 'Travel', label: 'Travel' },
                  ]}
                >

                </Select>
              </Form.Item>
            </Col>
          </Row>
        </Form>


      </Modal>
    </>
  );
};
export default UpdateBookFormUncontroll;