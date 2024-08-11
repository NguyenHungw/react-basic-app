import { Popconfirm, Table } from "antd";
import { useEffect, useState } from "react";
import { getAllBook } from "../../services/api.service";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

const BookTable = (props) => {
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
   const [isModalOpen, setIsModalOpen] = useState(false);
    const onChange = (pagination, filters, sorter, extra) => {
        //setCurrent ,setPageSize
        //nếu thay đổi trang Current 
        if (pagination && pagination.current) {
          if (+pagination.current !== +current) { //current la gia tri page hien tai react dang luu
            setCurrent(+pagination.current) //"5" =>5
          }
        }

        if (pagination && pagination.pageSize) {
          if (+pagination.pageSize !== +pageSize) { //current la gia tri page hien tai react dang luu
            setPageSize(+pagination.pageSize) //"5" =>5
          }
        }
      };

    const columns = [
        {
            title: 'STT',
            //key: '_id',
            render: (_, record, index) => {
                return (
                    <div>{index + 1}</div>
                )
            }
        },
        {
            title: '_id',
            dataIndex: '_id',
            //key: '_id',
            render: (_, record) => {
                return (
                    <a href="#">{record._id}</a>
                )
            }
        },
        {
            title: 'MainText',
            dataIndex: 'mainText',
            key: 'mainText',
        },
        {
            title: 'Author',
            dataIndex: 'author',
            key: 'author',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
        },
        {
            title: "Action",
            key: "action",
            render: (_, record) => (
              <>
                <div style={{ display: "flex", gap: "20px" }}>
                  <EditOutlined
                    onClick={() => {
                      setDataBook(record)
                      setIsModalOpen(true)
                    }}
                    style={{ cursor: "pointer", color: "orange" }}
                  />
                  <Popconfirm
                    // placement="left"
                    // title="Delete the task"
                    // description="Are you sure to delete this task?"
                    // onConfirm={() => { HandleDelete(record._id) }}
                    // //onCancel={cancel}
                    // okText="Yes"
                    // cancelText="No"
                  >
                    <DeleteOutlined style={{ cursor: "pointer", color: "red" }} />
                  </Popconfirm>
                </div>
              </>
            )
        }
    ];
    return (
        <>
            <Table
                dataSource={dataBook}
                columns={columns}
                rowKey={"_id"}
                pagination={
                    {
                        current: current,
                        pageSize: pageSize,
                        showSizeChanger: true,
                        total: total,
                        showTotal: (total, range) => { return (<div> {range[0]}-{range[1]} trên {total} rows</div>) }

                    }
                }
                onChange={onChange}
                
            />;
        </>
    )
}

export default BookTable;