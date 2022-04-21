import React, { useEffect, useState } from "react";
import "./styles.css"
import axios from "axios";
import { Editform } from "./EditForm";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useSelector,useDispatch } from "react-redux";
import { deleteSingleData, getAdminData } from "../Redux/Actions";
import { Footer } from "./Footer";

export const Elements = () => {
  const dispatch = useDispatch()
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [role,setRole] = useState('')
  const [id,setId] = useState('')
  const data1 = useSelector((store) => store.filterData)
  const page = useSelector((store) => store.page)
  const [showForm, setShowForm] = useState(false)
  const number_of_data = 10;
  let data = [];
  let startIndex = (page - 1) * number_of_data; //0
  let endIndex = startIndex + number_of_data; // 10
  data1.slice([startIndex], [endIndex]).map((item, i) => {
    data.push(item);
  });  
  
  const [loading, setLoading] = useState(false);
  const [multiple_delete_ids,setMultiple_delete_ids] = useState([]);

  const handleUserDelete = (id) => {
    dispatch(deleteSingleData(id))
  }

  const onCheckboxClick = (e) => {
    const curr_id = e.target.id;
    if (is_in_multiple_delete_ids(multiple_delete_ids,curr_id)){
      let newMultiple_delete_ids = deleteId(multiple_delete_ids,curr_id)
      setMultiple_delete_ids(newMultiple_delete_ids)
    } else {
      setMultiple_delete_ids([...multiple_delete_ids,curr_id])
    }
  }

  const is_in_multiple_delete_ids = (array,id) => {
    const isId = array.filter((item) => item == id)
    if (isId.length != 0){
      console.log(isId)
      return true;
    }
    return false;
  }

  const deleteId = (array,id) => {
    const newArray = array.filter((item) => item != id)

    return newArray;
  }
  const handleUserEdit = (current_id,current_name,current_email,current_role) => {
    setId(current_id)
    setEmail(current_email)
    setName(current_name)
    setRole(current_role)
    setShowForm(!showForm)
  }
  function getData() {
    setLoading(true);
    axios({
      method: "get",
      url: "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json",
    })
      .then((res) => {
         dispatch(getAdminData(res.data))
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {loading && <h2>Loading...</h2>}
      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" name="" id="" />
            </th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th className="actionEle">Action</th>
          </tr>
        </thead>
        <tbody>
          {!loading &&
            data &&
            data.map((info) => {
            
                return (
                  
                <tr key={info.id} className={ multiple_delete_ids.includes(info.id) ? "selectedRow"  : "" }>
                  <td>
                    {" "}
                    <input onChange={onCheckboxClick} type="checkbox" name="" id={info.id} />
                  </td>
                  <td>{info.name}</td>
                  <td>{info.email}</td>
                  <td>{info.role}</td>
                  <td className="iconsEle"><FaEdit onClick={() => handleUserEdit(info.id,info.name,info.email,info.role)}/> 
                      <FaTrash onClick={() => handleUserDelete(info.id)}/>
                  </td>
                </tr>
                
              );
            })}
        </tbody>
      </table>
      <div>{showForm ? <Editform 
                        showForm={showForm}
                        id={id}
                        name={name}
                        email={email}
                        role={role}/> : null}</div>
      <Footer multiple_delete_ids={multiple_delete_ids}/>
    </>
  );
};
