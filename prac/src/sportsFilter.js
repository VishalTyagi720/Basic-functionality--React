import React, { useEffect, useMemo, useState } from "react";


function SportFiltering () {

    const Sports = [
        { name: "Table Tennis", category: "Indoor" },
        { name: "Football", category: "Outdoor" },
        { name: "Swimming", category: "Aquatics" },
        { name: "Chess", category: "Indoor" },
        { name: "BaseBall", category: "Outdoor" },
        { name: "Tennis", category: "Indoor" },
        { name: "Basket Ball", category: "Indoor" },
        { name: "Hockey", category: "Outdoor"},
        { name: "Volleyball", category: "Indoor"},
        { name: "Badminton", category: "Indoor"},
        { name: "Soccer", category: "Outdoor"},
        { name: "Cricket", category: "Outdoor"},
        { name: "Rugby Union", category: "Outdoor"},
        { name: "Aqua Gym", category: "Aquatics"}
    ]

    const [sportList, setsportList] = useState([]);
    const [selectCategory, setselectCategory] = useState();

    useEffect (() => {
        setsportList(Sports);
    }, []);

    const handleCategory = (e) => {
        setselectCategory(e.target.value)
        console.log(e.target.value)
    }

    const getfilteredList = () => {
        if (selectCategory === "All") {
            return sportList
        }

        return sportList.filter((item) => item.category === selectCategory);
    }

    const filteredList = useMemo(getfilteredList, [selectCategory, sportList])

    return (
        <>
        <div>
        <form>
            <label htmlFor="category_list">Filter by Category:</label>
            <select name="category_list" id="category_list" onChange={handleCategory}>
                <option value="All">All</option>
                <option value="Indoor">Indoor</option>
                <option value="Outdoor">Outdoor</option>
                <option value="Aquatics">Aquatics</option>
            </select>
        </form>
        </div>

        <div>
            {filteredList.map((item, index) => (
                <Item {...item} key={index} />
            ))}
        </div>
        </>
    )
};


const Item = ({name, category}) => {
    return (
      <div>
        <ul>
          <li>Sports Name : {name}</li>
          <li>Category : {category}</li>
        </ul>
      </div>
    )
  }




export default SportFiltering;