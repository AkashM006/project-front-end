import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import server from "../../constants";
import { logout } from "../../actions/userActions";
import { useEffect, useState } from "react";
import Styles from "./Call.module.css";
import React from "react";

function Call() {
    const { id } = useParams();
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    // const [call, setCall] = useState();
    const navigate = useNavigate();
    const [UserName, setUserName] = React.useState("");
    const [complaint, setComplaint] = React.useState("");
    const [Product, setProduct] = React.useState("");
    const [Remarks, setRemarks] = React.useState("");
    const [EngineerName, setEngineerName] = React.useState("");
    const [status, setStatus] = React.useState();
    const [date, setDate] = React.useState();

    // todo: start from here, get info from the backend about the call and change it
    useEffect(() => {
        if (!user) navigate('/login');
        const token = user == null ? '' : user.token;
        axios.get(`${server}/call/${id}`, { headers: { "Authorization": token } })
            .then(res => {
                if (res.data.call) {
                    if (user.type !== 3 && res.data.call.user.email !== user.email) navigate('/user/calls');

                    const call = res.data.call;
                    setComplaint(call.complaint);
                    setProduct(call.products);
                    setRemarks(call.remarks);
                    setUserName(call.user.name);
                    setEngineerName(call.engineer === null ? '' : call.engineer);
                    setStatus(call.status);
                    setDate(call.createdAt);

                }
            })
            .catch(err => {
                console.log("Error" + err);
                if (err.response.status === 401) {
                    dispatch(logout());
                } else console.log(err);
            })
    }, [user]);


    return (
        // Required Fields:
        // User name
        // complaint
        // product
        // remarks
        // engineer name
        // status
        // booked at time

        // todo: if it is the user then some fields can be editable
        // todo: else if it is the corresponding service engineer then make everything un editable
        // todo: else if it admin then make the service engineer field alone editable
        <div className={Styles.main}>

            {user && <form className={Styles.form}>
                <h1 className={Styles.h1}>Calls</h1>
                {user.type !== 1 && <label>
                    UserName:
                    <input className={Styles.input}
                        name="UserName"
                        type="text"
                        value={UserName}
                        onChange={(e) => setUserName(e.target.value)}
                        required
                    />
                </label>}
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

                <label>
                    Engineer Name:
                    <input className={Styles.input}
                        name="Product"
                        type="text"
                        value={EngineerName}
                        onChange={(e) => setEngineerName(e.target.value)}
                        required
                    />
                </label>

                <label>
                    Status:
                    <>
                        {status === 0 ? <label style={{ color: 'red' }}> Pending</label> : <label style={{ color: 'green' }}> Completed</label>}
                    </>
                </label>

                <label>
                    Booked Date:
                    <label> {new Date(date).toLocaleDateString('en-GB')}</label>
                </label>

                {user.type !== 2 && <button className={Styles.button}>Update</button>}
            </form>}
        </div>
    );
}

export default Call;