import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AdminDetails() {
  const [data, setData] = useState({ lists: [] });

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("http://localhost:8080/getUsers");
      setData({ lists: response.data });
    };
    getData();
  }, []);

  return (
    <>
      <div className="back">
        <Link to="/Home">Back</Link>
      </div>
      <div className="backend">{data}</div>
      <div class="cards">
        {setData.lists.map((current, i) => (
          <ListBar product={current} key={i} />
        ))}
      </div>
    </>
  );
}

export default AdminDetails;
