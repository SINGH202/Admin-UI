import React, {useState} from "react";
import "./styles.css"
import { ImCross } from "react-icons/im"
import { useDispatch } from "react-redux";
import { editAdminData } from "../Redux/Actions";

export const Editform = ({showForm,id,name,email,role}) =>{
    const dispatch = useDispatch()
    const [editname, setName] = useState(name);
    const [editemail, setEmail] = useState(email);
    const [editrole, setRole] = useState(role);
    const [form, setForm] = useState(showForm)

    function handleSubmit(event){
        event.preventDefault()
        // alert([name, email, role])
        let obj_to_update = {
            id: id,
            name: editname,
            email: editemail,
            role: editrole,
        }
        dispatch(editAdminData(obj_to_update))

    }

    function handleNameChange(e){
        setName(e.target.value)
    }
    
    function handleEmailChange(e){
        setEmail(e.target.value)
    }

    function handleRoleChange(e){
        setRole(e.target.value)
    }

    return (
        <div className="formDiv" style={form ? {}: {display:"none"}}>
            <ImCross className="crossIcon" onClick={() =>{
                setForm(!form)
            }}/>
            <form className="form" onSubmit={handleSubmit}>
                <input type="text" value={editname} placeholder="Enter new name" onChange={handleNameChange}/>
                <br />
                <input type="text" value={editemail} placeholder="Enter new email" onChange={handleEmailChange}/>
                <br />
                <label>Select Role : </label>
                <select value = {editrole} onClick={handleRoleChange}>
                    <option value="member">Member</option>
                    <option value="admin">Admin</option>
                </select>
                <br />
                <input type="submit" value="Update" onClick={() =>{
                    setForm(!form)
                }}/>
            </form>
        </div>
    )
}