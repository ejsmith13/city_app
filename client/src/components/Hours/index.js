import React from "react";

function Hours(props) {
  console.log(props);

  return (
    <div className=" hoursContainer">
      <div className="col">
        <h3 style={{ textDecoration: "underline" }}>Hours</h3>

       { props.hours !== undefined && props.hours.length > 0 ? (
          props.hours.map((day) => {
            return <p key={day}>{day}</p>;
          })
        ) : (
          <p>Hours Not Currently Available</p>
        )}
      </div>
    </div>
  );
}

export default Hours;
