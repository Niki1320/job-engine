import React from "react";

function Headeroptions({Icon,title}){
    return(
        <div className="top_options">
             <Icon></Icon>
              <span>{title}</span>
        </div>
    )
}
export default Headeroptions;