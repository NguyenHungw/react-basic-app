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
        <p>{dataViewDetail.thumbnail}</p>
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