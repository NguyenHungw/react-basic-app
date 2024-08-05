import UserForm from "../components/user/user.form";
import UserTable from "../components/user/user.table";
import { fetchAllUserAPI } from "../services/api.service";
import { useEffect, useState } from "react";

const UsersPage = () => {
  const [dataUsers, setDataUsers] = useState([]);
  useEffect(() => {
    //   console.log('run userEffect 111')
    loadUser();
  }, []);

  const loadUser = async () => {
    //console.log("load user START>>")
    const res = await fetchAllUserAPI();
    //console.log("ENDD>>",res.data)
    setDataUsers(res.data);
  };
  return (
    <div style={{ padding: "20px" }}>
      <UserForm loadUser={loadUser} />
      <UserTable loadUser={loadUser} dataUsers={dataUsers} />
    </div>
  );
};
export default UsersPage;
