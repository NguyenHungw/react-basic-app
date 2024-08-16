import { useState } from "react";
import { Button, Drawer, notification } from 'antd';
import { handleUploadFile, updateImgBookAPI } from "../../services/api.service";

const BookDetail = (props) => {


  const { viewDetail, setViewDetail, dataViewDetail, setViewDataDetail,loadBook } = props
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleOnchangUpload = (e) => {
    if (e.target.files && e.target.files.length === 0) {


      setSelectedFile(null);
      setPreview(null);
      return
    }
    const file = e.target.files[0]
    if (file) {
      setSelectedFile(file)
      setPreview(URL.createObjectURL(file))
      console.log("check lan thu 2>>", file)
     

    }

  }
  const handleUploadBook = async() => {
    const res = await handleUploadFile(selectedFile,"book")
    if(res.data){
      const newImg = res.data.fileUploaded
      const resUpdateImg = await updateImgBookAPI(newImg,dataViewDetail._id,dataViewDetail.mainText,dataViewDetail.author,dataViewDetail.price,dataViewDetail.quantity,dataViewDetail.category)
      if(resUpdateImg.data){
        await loadBook()
        notification.success({
          message:"Success",
          description:"Cập nhật thành công"
        })
      }else{
        notification.error({
          message:"error",
          description: JSON.stringify(resUpdateImg.data.error)
        })
      }
      notification.success({
        message:"Sucess",
        description:"Tai len thanh cong"
      })

    }else{
      notification.error({
        message:"Error",
        description: JSON.stringify(res.data.error)
      })
    }
  }
  console.log("check preview",preview)
  return (
    <>
      {/* <Button type="primary" onClick={showDrawer}>
        Open
      </Button> */}

      <Drawer title="Basic Drawer" onClose={() => { setViewDetail(false) }} open={viewDetail}>
        {dataViewDetail ? (
          <>
            <p>{dataViewDetail._id}</p>
            <div style={{
              marginTop: "10px",
              height: "100px", width: "150px",
              border: "1px solid #ccc"
            }}>
              <img style={{ height: "100%", width: "100%", objectFit: "contain" }}

                src={`${import.meta.env.VITE_BACKEND_URL}/images/book/${dataViewDetail.thumbnail}`}
              ></img>
            </div>
            <p>{dataViewDetail.mainText}</p>
            <p>{dataViewDetail.author}</p>
            <p>{dataViewDetail.price}</p>
            <p>{dataViewDetail.quantity}</p>
            <p>{dataViewDetail.category}</p>
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

                }

              }
            >Upload file</label>
            <input type="file" hidden id="btnUpload"
              // onChange={handleOnchangUpload}
              onChange={(event) => { handleOnchangUpload(event) }}

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
                <Button onClick={handleUploadBook} type="primary" style={{marginTop:"10px"}}>
                  Save
                </Button>
              </>
            }
          </>
        ) :
          (
            <>
              Nodata
            </>
          )
        }

      </Drawer>

    </>
  )
}
export default BookDetail