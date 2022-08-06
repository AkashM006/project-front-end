import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import server from "../../constants";
import { logout } from "../../actions/userActions";
import { useEffect, useState } from "react";

export default function Call() {
    const { id } = useParams();
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const [call, setCall] = useState();
    const navigate = useNavigate();

    // todo: start from here, get info from the backend about the call and change it
    useEffect(() => {
        axios.get(`${server}/call/${id}`, { headers: { "Authorization": user.token } })
            .then(res => {
                if (res.data.call) {
                    setCall(res.data.call);
                    if (user.type !== 3 && res.data.call.user.email !== user.email) navigate('/user/calls')
                    console.log(res.data.call)
                }
            })
            .catch(err => {
                if (err.response.status === 401) {
                    alert("Session expired. Please login again!");
                    dispatch(logout());
                } else console.log(err);
            })
    }, []);

    return (
        // Required Fields:
        // User name
        // complaint
        // product
        // remarks
        // engineer name
        // status
        // booked at time
        <h1>Details about your call</h1>
    )
}