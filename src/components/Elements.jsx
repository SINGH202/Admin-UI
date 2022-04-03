import React, { useEffect, useState } from "react";
import "./styles.css"
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Editform } from "./EditForm";

export const Elements = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false)
  const [changeColor, setChangeColor]  = useState(false)

  function getData() {
    setLoading(true);
    axios({
      method: "get",
      url: "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json",
    })
      .then((res) => {
        setData(res.data);
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


  function handleForm(){
    setShowForm(!showForm)
  }

  function handleCheckBox(e){
    setChangeColor(!changeColor)
    // style={changeColor ? {backgroundColor:"silver"} :{backgroundColor:"transparent"}}
  }


  return (
    <div className="elementsDiv">
      {loading && <h2>Loading...</h2>}
      <table>
        <thead>
          <tr>
            <th className="checkBoxEle">
              <input type="checkbox" name="" id="" />
            </th>
            <th className="nameElement">Name</th>
            <th className="emailElement">Email</th>
            <th>Role</th>
            <th className="actionEle">Action</th>
          </tr>
        </thead>
        <tbody>
          {!loading &&
            data &&
            data.map((info) => {
            
                return (
                  
                <tr key={info.id}  >
                  <td className="checkBoxEle">
                    {" "}
                    <input type="checkbox" name="" id="" onChange={handleCheckBox}/>
                  </td>
                  <td className="nameElement">{info.name}</td>
                  <td className="emailElement">{info.email}</td>
                  <td>{info.role}</td>
                  <td className="iconsEle"><FaEdit onClick={handleForm}/> <FaTrash/></td>
                </tr>
                
              );
            })}
        </tbody>
      </table>
      <div>{showForm ? <Editform showForm={showForm}/> : null}</div>
      
    </div>
  );
};
