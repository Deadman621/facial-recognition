import React from "react";
import './Rank.css'

const Rank = ({ name, rank }) => {
    return (
        <div>
            <div className="black f5">
                {`${name}, your current rank is...`}
            </div>
            <div className="black f1">
                {`${rank}`}
            </div>
        </div>
    )
}

export default Rank;