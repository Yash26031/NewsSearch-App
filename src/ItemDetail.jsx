import axios from "axios";
import React from "react";
import { ImCross } from "react-icons/im";
import { useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useGlobalContext } from "./Context";

const ItemDetail = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  const { hits } = useGlobalContext();

  const compare = () => {
    let compareData = hits.filter((elem) => elem.objectID == id);
    setData(compareData);
  };

  useEffect(() => {
    compare();
  }, []);

  return (
    <div>
      {data.map((d) => (
        <div className="bg-green-300 h-screen flex flex-col items-center justify-center space-y-6">
          <Link to={"/"}>
            <ImCross
              className="text-red-700 absolute right-3 bg-white p-2 rounded-full"
              size={40}
            />
          </Link>
          <h1 className="text-black text-2xl">
            <span className="font-semibold"> Title : </span>
            {d.title}
          </h1>
          <h1 className="text-black text-2xl">
            <span className="font-semibold"> Author : </span>
            {d.author}
          </h1>
          <img src="https://media.istockphoto.com/photos/digital-transformation-concept-system-engineering-binary-code-picture-id1321462048?s=612x612" />
        </div>
      ))}
    </div>
  );
};

export default ItemDetail;
