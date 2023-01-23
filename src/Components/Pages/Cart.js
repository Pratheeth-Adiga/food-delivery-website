import React from "react";
import CartCard from "../Cart/CartCard";
import CartTop from "../Cart/CartTop";
import CartEnd from "../Cart/CartEnd";
import axios from "axios";
import CusTop from "../CustomerPage/CusTop";
export default function Cart() {
    // const { id } = useParams();
    // console.log(id)
    
    // const [data,setData]=useState([])
    // const fetchData = async() => {
    //     const response = await axios.get(`http://127.0.0.1:8000/restaurant/${id}/`)
    //     const res = await response.data
    //     console.log(res)
    //     setData(res)
    // }
    // useEffect(() => {
    //     fetchData()
    //     console.log(typeof(data))
    // }, [])
    
    
    return(
        <div>
        <CusTop/>
        <CartCard/>
        
        <CartEnd/>
        </div>
    )
}