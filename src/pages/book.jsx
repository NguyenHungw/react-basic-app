import { useEffect, useState } from "react"
import BookForm from "../components/book/book.form"
import BookTable from "../components/book/book.table"
import { getAllBook } from "../services/api.service"
import BookFormUncontrol from "../components/book/book.form.uncontrol"

const BookPage = () => {
  const [dataBook, setDataBook] = useState()
  const [current, setCurrent] = useState(1)
  const [pageSize, setPageSize] = useState(5)
  const [total, setTotal] = useState(0)
  console.log("check current",current)
  const loadBook = async () => {
      const res = await getAllBook(current, pageSize)
      if (res.data) {
          // console.log("check data book>>",res.data.result)
          setDataBook(res.data.result)

          setCurrent(res.data.meta.current)
          setPageSize(res.data.meta.pageSize)
          setTotal(res.data.meta.total)

      }


  }
  useEffect(() => {
      loadBook()
  }, [current])


    return (
       <>
       <BookFormUncontrol></BookFormUncontrol>
         {/* <BookForm
          loadBook={loadBook}
         /> */}
         <BookTable
          dataBook={dataBook}
          setDataBook = {setDataBook}
          current = {current}
          setCurrent = {setCurrent}
          pageSize = {pageSize}
          setPageSize = {setPageSize}
          total = {total}
          loadBook={loadBook}

         />
       </>

    )
}
export default BookPage
