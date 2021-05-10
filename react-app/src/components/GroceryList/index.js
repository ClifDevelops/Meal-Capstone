import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getAllMeals } from "../../store/meal";
import "./GroceryList.css";

const GroceryList = () => {
    const dispatch = useDispatch();
    const list = useSelector((state) => state?.groceryList?.groceryList);
    console.log(list)

    return (
        <div className='grocery-list-container'>
            <div>GROCERY LIST</div>
            {list.map((item) => {
                return (
                    <div>
                    <div key={item.id}>{item.name}</div>
                    <div>
                        <button>Remove</button>
                    </div>

                    </div>
                )
            })}
             </div>
    )
}

export default GroceryList