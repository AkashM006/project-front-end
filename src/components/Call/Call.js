import { useParams } from "react-router-dom"

export default function Call(){
    const {id} = useParams();
    // todo: start from here, get info from the backend about the call and change it
    // console.log(id);
    return (
        <h1>Details about your call</h1>
    )
}