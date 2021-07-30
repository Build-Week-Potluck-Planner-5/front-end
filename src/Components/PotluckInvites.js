import React, { useState, useEffect, useRef } from "react";
import axiosWithAuth from "../axiosWithAuth";

const Potluck = (props) => {
  const {
    potluck_name,
    potluck_date,
    potluck_time,
    potluck_location,
    potluck_id,
  } = props.potluckData;
  const [rsvp, setRsvp] = useState({ attending: false });
  const firstRenderRef = useRef(true);
  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
    } else {
      axiosWithAuth()
        .put(`/api/potlucks/${potluck_id}/rsvp`, rsvp)
        .then((res) => {
          props.setState(!props.state);
          console.log("rsvp success", res.data);
        })
        .catch((err) => {
          console.log("potluck rsvp error", err);
        });
    }
  }, [rsvp]);
  const handleAccept = () => {
    setRsvp({ attending: true });
  };
  const handleDecline = () => {
    setRsvp({ attending: false });
  };

  return (
    <tr className="tableRow">
      <td>{potluck_name}</td>
      <td>{potluck_date}</td>
      <td>{potluck_time}</td>
      <td>{potluck_location}</td>
      <td>
        <button onClick={handleAccept}>Accept</button>
      </td>
      <td>
        <button onClick={handleDecline}>Decline</button>
      </td>
    </tr>
  );
};

const PotluckInvites = () => {
  const [potluckData, setPotluckData] = useState([]);
  const [state, setState] = useState(false);
  useEffect(() => {
    axiosWithAuth()
      .get("/api/potlucks/invites")
      .then((res) => {
        console.log(res.data);
        setPotluckData(res.data);
      })
      .catch((err) => {
        console.log("after initial axio get", err);
      });
  }, [state]);
  return (
    <div className="container">
      <table>
        <tbody>
          <tr className="tableHeader">
            <th>Potluck Name</th>
            <th>Potluck Date</th>
            <th>Potluck Time</th>
            <th>Potluck Location</th>
          </tr>
          {potluckData.map((potluck) => {
            return (
              <Potluck
                setState={setState}
                state={state}
                key={potluck.potluck_id}
                potluckData={potluck}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PotluckInvites;
