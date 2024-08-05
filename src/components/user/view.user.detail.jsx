import React, { useState } from "react";
import { Button, Drawer } from "antd";
const ViewUserDetail = (props) => {
  const {
    openDetailUser,
    setOpenDetailUser,
    setDataDetailUser,
    dataDetailUser,
  } = props;
  //console.log("check props>>", props)

  const onClose = () => {
    setOpenDetailUser(false);
  };

  // console.log("check data detail user>>", dataDetailUser)
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
            <div>
              <img
                height={250}
                width={300}
                src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataDetailUser.avatar}`}
              ></img>
            </div>
            <label htmlFor="btnUpload"
            style={
              {display:"block",
              width:"fit-content",
              marginTop:"15px",
              padding:"5px 10px",
              background:"orange",
              borderRadius:"5px",
              cursor:"pointer"

              }
            
            }
            >Upload file</label>
            <input type="file" hidden id="btnUpload"></input>
            {/* <Button type="primary">Upload avatar</Button> */}
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
