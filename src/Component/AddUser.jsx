import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/adduser.css";


const AddUser = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate=useNavigate();

    const AddUser = (e) => {
        e.preventDefault();
        // console.log({username,email,password});   print on console
        const hrdata = { username, password };

        fetch("http://localhost:5001/login", {
            method: "POST",
            headers: {"Content-Type": "application/json" },
            body: JSON.stringify(hrdata)
        })
            .then((res) => {
                alert('User added successfully')
                navigate('/')

            }).catch((err) => {
                console.log(err.message);
            })
    }


    return ( <div className="login-container">
        <h1>Signup User</h1>
        <form onSubmit={AddUser}>
            <div>
                
                <input type="text" required placeholder="usename" value={username} onChange={e => setUsername(e.target.value)} />
            </div>
            <div>
               
                <input type="password" required placeholder="password" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <button>Add</button>
        </form>
    </div>);
}
 
export default AddUser;