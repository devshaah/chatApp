import React, { useState } from "react";
import "./style.scss";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth ,db, storage} from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate,Link } from "react-router-dom";
import {doc,setDoc} from "firebase/firestore"

const Register = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault(); 
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      //for uploading name and image

      await uploadBytesResumable(storageRef, file).then(()=>{
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          } catch (err) {
            console.log(err);
            setErr(true);
            setLoading(false);
          }
        });
      });
    } catch (err) {
      setErr(true);
      setLoading(false);
    }
}

   

  return (
    <div className="form-container">
      <div className="form-wrapper">
        <span className="head">We Chat</span>
        <span>Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="your name.." />
          <input type="email" placeholder="your email.." />
          <input type="password" placeholder="your password.." />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src="https://cdn-icons-png.flaticon.com/512/16/16410.png" alt="img"/>
            <span>Add an Avatar</span>
          </label>

          <button>Sign Up</button>
            {loading && "Uploading and compressing the image please wait..."}
          {err && <span>Something went wrong</span>}
        </form>
        <p><Link to="login">
          Already have an Account ? Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
