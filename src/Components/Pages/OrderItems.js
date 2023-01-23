import React from "react";
import Top from "../RestuarantPage/Top";
import Restaurant from "../RestuarantPage/restaurant";
import CusTop from "../CustomerPage/CusTop";
import Orders from "./Orders";
export default function RestuarantOrderItems(){
    return(
        <div>
            <CusTop/>
            <Orders/>
        </div>
    )
}