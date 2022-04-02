import React, { useEffect, useState } from "react";
import "./styles.css"
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";

export const Elements = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

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

  return (
    <>
      <h3>elements</h3>
      {loading && <h2>Loading...</h2>}
      <table>
        <thead>
          <tr>
            <td>
              <input type="checkbox" name="" id="" />
            </td>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <hr />
        <tbody>
          {!loading &&
            data &&
            data.map((info) => {
            
                return (
                  
                <tr key={info.id}>
                  <td>
                    {" "}
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td>{info.name}</td>
                  <td>{info.email}</td>
                  <td>{info.role}</td>
                  <td><FaEdit/> <FaTrash/></td>
                </tr>
                
              );
            })}
        </tbody>
      </table>
      
    </>
  );
};
