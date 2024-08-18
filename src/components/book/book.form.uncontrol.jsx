import React, { useState } from 'react';
import { Button, Col, Form, Input, InputNumber, Modal, notification, Row, Select } from 'antd';
import { createBookAPI, handleUploadFile } from '../../services/api.service';
import { Option } from 'antd/es/mentions';
import { useForm } from 'antd/es/form/Form';
import TypedInputNumber from 'antd/es/input-number';
const BookFormUncontrol = (props) => {
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);


  // if(values)
  // console.log("check form>>",form)


  //const [thumbnail, setThumbnail] = useState("")

  const [selectedFile, setSelectedFile] = useState(null)
  const [preview, setPreview] = useState(null)


  const handleSelecteFile = (e) => {
    if (!e.target.files || e.target.files === 0) {
      setSelectedFile(null)
      setPreview(null)

      return
    }
    const file = e.target.files[0]
    if (file) {
      setSelectedFile(file)
      setPreview(URL.createObjectURL(file))
    }
    console.log(preview)
    console.log(selectedFile)
  }
  const onFinish = async (values) => {
     console.log("check selectedFile", selectedFile)
    const resUploadImg = await handleUploadFile(values.thumbnail, "book")
    
    if (resUploadImg.data) {
      const img = resUploadImg.data.fileUploaded
      const resCreateABook = await createBookAPI(img, values.mainText, values.author, values.price, values.quantity, values.category)
      if (resCreateABook.data) {
        await resetAndCloseModal()
        notification.success({
          message: "Susscess",
          description: "Thêm mới thành công"
        })
      } else {
        notification.error({
          message: "error",
          description: JSON.stringify(resCreateABook.data.error)
        })
      }
    } else {
      notification.error({
        message: "Error",
        description: "Tải ảnh lên thất bại"
      })
    }

  };
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

  const resetAndCloseModal = async () => {
    form.resetFields()
    setIsModalOpen(false)

    setPreview(null)
    setSelectedFile(null)
    // setThumbnail("")
    await loadBook()
  }

  const handleCancel = () => {
    setIsModalOpen(false)
    setPreview(null)
    setSelectedFile(null)

  }

  // const handleOk = async () => {
  //   const resUpload = await handleUploadFile(selectedFile, "book")
  //   if (resUpload.data) {
  //     const thumbnail = resUpload.data.fileUploaded
  //     const resUpdateImgBook = await createBookAPI(thumbnail, mainText, author, price, quantity, category)
  //     if (resUpdateImgBook.data) {
  //       await resetAndCloseModal()

  //       notification.success({
  //         message: "Uploaded",
  //         description: "Thêm mới thành công "
  //       })
  //     } else {
  //       notification.error({
  //         message: "Error",
  //         description: JSON.stringify(resUpdateImgBook.error.data)
  //       })
  //     }
  //   }
  // };
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  }

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

        <Modal title="Uncontrol"
          open={isModalOpen}
          //  onOk={handleOk}

          //\\ onOk={() => { form.submit()}}
          // onFinish={onFinish}
          // onOk={onFinish}
          onOk={() => {
            form.setFieldsValue({
              thumbnail: selectedFile
            },
              form.submit()
            )
          }}

          onCancel={handleCancel}>

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
                {/* <Button onClick={() => { form.submit() }} type="primary">Submit</Button> */}
                {/* <button type='submit' style={{ color:"primary", padding:"5"}}> submit</button>  */}
                {/* <Button onClick={() =>  
                  {
                    form.setFieldsValue({
                      thumbnail:selectedFile
                    },
                    form.submit()
                    )
                   // form.submit()
                  
                  }
                  
                  } type="primary">Submit</Button> */}



              </Col>
            </Row>
          </Form>


        </Modal>
      </div>
    </div>
  );
};
export default BookFormUncontrol;