import { useState } from "react";
import { Button, Drawer } from 'antd';

const BookDetail = (props) => {

    
    const {viewDetail,setViewDetail,dataViewDetail,setViewDataDetail } = props

    return(
        <>
         {/* <Button type="primary" onClick={showDrawer}>
        Open
      </Button> */}
     
      <Drawer title="Basic Drawer" onClose={()=>{setViewDetail(false)}} open={viewDetail}>
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
          </>
        ):
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