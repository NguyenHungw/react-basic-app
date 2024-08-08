import UserForm from "../components/user/user.form";
import UserTable from "../components/user/user.table";
import { fetchAllUserAPI } from "../services/api.service";
import { useEffect, useState } from "react";

const UsersPage = () => {
  const [dataUsers, setDataUsers] = useState([]);

  const [current,setCurrent] = useState(1);
  const [pageSize,setPageSize] = useState(5);
  const [total,setTotal] = useState(0);
  useEffect(() => {
    //   console.log('run userEffect 111')
    loadUser();
  }, []);

  const loadUser = async () => {
    //console.log("load user START>>")
    const res = await fetchAllUserAPI(current,pageSize);
    if(res.data){
      setDataUsers(res.data.result);
      setCurrent(res.data.meta.current);
      setPageSize(res.data.meta.pageSize);
      setTotal(res.data.meta.total);

    }
    //console.log("ENDD>>",res.data)
  };
  return (
    <div style={{ padding: "20px" }}>
      <UserForm loadUser={loadUser} />
      <UserTable 
      loadUser={loadUser} 
      dataUsers={dataUsers} 
      current = {current}
      pageSize = {pageSize}
      total = {total}
      setCurrent = {setCurrent}
      setPageSize = {setPageSize}
      setTotal = {setTotal}
      
      />
    </div>
  );
};
export default UsersPage;
