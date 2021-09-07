import React, { useState } from 'react';
// import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const DropDownSort = () => {
    const [filterState, setFilterState] = useState("");

    return (
        <div className="selectdiv">
            <p className="titlesort">Trier par </p>
            <select onChange={(e) => {
                const selectedFilter = e.target.value;
                setFilterState(selectedFilter);
            }}>
                <option selected value="Popularity"> Popularité </option>
                <option value="Date"> Date </option>
                <option value="Title"> Titre </option>
            </select>
            {/* {filterState} */}
        </div>
    );
};

export default DropDownSort;
