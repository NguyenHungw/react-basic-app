import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
const ViewUserDetail = (props) => {
  const { openDetailUser, setOpenDetailUser, setDataDetailUser, dataDetailUser } = props;
  //console.log("check props>>", props)

  const onClose = () => {
    setOpenDetailUser(false);
  };

 // console.log("check data detail user>>", dataDetailUser)
  return (
    <>
      {/* <Button type="primary" onClick={showDrawer}>
        Open
      </Button> */}
      <Drawer
        title="Basic Drawer"
        onClose={onClose}
        open={openDetailUser}
      // open={showDrawer}
      >
        {dataDetailUser ? 
        <>
         <p>_id: {dataDetailUser._id}</p>
        <p>Fullname: {dataDetailUser.fullName}</p>
        <p>Email: {dataDetailUser.email} </p>
        <p>Phone: {dataDetailUser.phone}</p>
        </>
       
      :
      <>
       <p>nodata</p>
      </>
     
      
      }
        
      </Drawer>
    </>
  );
};
export default ViewUserDetail;