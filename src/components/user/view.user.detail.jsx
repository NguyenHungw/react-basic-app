import React, { useState } from "react";
import { Button, Drawer, notification } from "antd";
import { handleUploadFile, updateUserAvatarAPI } from "../../services/api.service";

const ViewUserDetail = (props) => {
  const {
    openDetailUser,
    setOpenDetailUser,
    setDataDetailUser,
    dataDetailUser,
    loadUser
  } = props;
  //console.log("check props>>", props)
  const [selectedFile, setSelectedFile] = useState(null)
  const [preview, setPreview] = useState(null)

  const handleOnchangUpload = (event) => {
    //kiem tra neu ko upload file
    if (!event.target.files || event.target.files.length === 0) {
      //setSelectedFile(undefined)
      setSelectedFile(null)
      setPreview(null)
      return
    }

    // I've kept this example simple by using the first image instead of multiple
    const file = event.target.files[0]
    if (file) {
      setSelectedFile(file)
      setPreview(URL.createObjectURL(file))
    }
  }
  console.log("check file>>>", preview)

  const handleUpdateUserAvatar = async () => {
    const resUpload = await handleUploadFile(selectedFile, "avatar") //avatar o day la ten folder chua anh ten la avatar trong thu muc share
    console.log("check resUpload", resUpload)

    if (resUpload.data) {
      //success

      // console.log("check resUploaddata", resUpload.data)
      const newAvatar = resUpload.data.fileUploaded
      //step 2 update user
      const resUpdateAvatar = await updateUserAvatarAPI(newAvatar,dataDetailUser._id,dataDetailUser.fullName,dataDetailUser.phone )
      if (resUpdateAvatar.data) {
        setSelectedFile(null)
        setPreview(null)
        setOpenDetailUser(false)
        await loadUser()

        notification.success({
          message: "Updated user avatar",
          description: "cập nhật avatar thành công"
        })
      } else {
        notification.error({
          message: "Error Upload file",
          description: JSON.stringify(resUpdateAvatar.message)
        })
      }

    } else {
      notification.error({
        message: "Error Upload file",
        description: JSON.stringify(resUpload.message)
      })
    }

  }

  return (
    <>
      <Drawer
        width={"40vw"} //tuc la 60% man hinh
        title="Basic Drawer"
        onClose={() => {
          setDataDetailUser(null);
          setOpenDetailUser(false);
        }}
        open={openDetailUser}
      // open={showDrawer}
      >
        {dataDetailUser ? (
          <>
            <p>_id: {dataDetailUser._id}</p>
            <p>Fullname: {dataDetailUser.fullName}</p>
            <p>Email: {dataDetailUser.email} </p>
            <p>Phone: {dataDetailUser.phone}</p>
            <div style={{
              marginTop: "10px",
              height: "100px", width: "150px",
              border: "1px solid #ccc"
            }}>
              <img style={{ height: "100%", width: "100%", objectFit: "contain" }}

                src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataDetailUser.avatar}`}
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

                }

              }
            >Upload file</label>
            <input type="file" hidden id="btnUpload"
              // onChange={handleOnchangUpload}
              onChange={(event) => { handleOnchangUpload(event) }}

            ></input>
            {/* <Button type="primary">Upload avatar</Button> */}
            {/* neu co hinh anh preview thi moi in ra cai div nay */}
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
                <Button
                  type="primary"
                  onClick={handleUpdateUserAvatar}
                >Save</Button>
              </>

            }
          </>
        ) : (
          <>
            <p>nodata</p>
          </>
        )}
      </Drawer>
    </>
  );
};
export default ViewUserDetail;
