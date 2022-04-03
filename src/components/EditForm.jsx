import React, {useState} from "react";
import "./styles.css"
import { ImCross } from "react-icons/im"

export const Editform = (props) =>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("member");
    const [form, setForm] = useState(props.showForm)

    function handleSubmit(event){
        event.preventDefault()
        alert([name, email, role])
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
                <input type="text" placeholder="Enter new name" onChange={handleNameChange}/>
                <br />
                <input type="text" placeholder="Enter new email" onChange={handleEmailChange}/>
                <br />
                <label>Select Role : </label>
                <select onClick={handleRoleChange}>
                    <option value="member">Member</option>
                    <option value="admin">Admin</option>
                </select>
                <br />
                <input type="submit" value="Update" />
            </form>
        </div>
    )
}