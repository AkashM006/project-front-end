import React, { useEffect } from "react";
import Styles from "./BookCall.module.css";
import server from "../../constants";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


function BookAServiceCall() {
  const [complaint, setComplaint] = React.useState("");
  const [Product, setProduct] = React.useState("");
  const [Remarks, setRemarks] = React.useState("");
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(()=> {
    if(user.type!==1){
      navigate('/');
    }
  },[user,navigate])

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const data = {
      email:user.email,
      products: Product,
      complaint,
      remarks: Remarks
    }

    axios.post(`${server}/call`,{data},{headers:{"Authorization": user.token}},)
    .then(res => {
      // console.log(res)
      if(res.data.success){
        alert(res.data.msg);
      }else alert("Something went wrong while booking please try again!");
    })
    .catch(err => {
      console.log(err)
      alert(err.data.msg)
    })
  };

  return (
    <div className={Styles.main}>
      <form onSubmit={handleSubmit} className={Styles.form}>
        <h1 className={Styles.h1}>Book A Service Call</h1>
        <br />
        <label>
          Product:
          <input className={Styles.input}
            name="Product"
            type="text"
            value={Product}
            onChange={(e) => setProduct(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Complaint:
          <input className={Styles.input}
            name="complaint"
            type="text"
            value={complaint}
            onChange={(e) => setComplaint(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Remarks:
          <input className={Styles.input}
            name="Remarks"
            type="text"
            value={Remarks}
            onChange={(e) => setRemarks(e.target.value)}
            required
          />
        </label>
        <br />
        <button className={Styles.button}>Book!</button>
      </form>
    </div>
  );
}

export default BookAServiceCall;
