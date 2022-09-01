import React from "react";
import { useParams } from "react-router-dom";


export default function Profile() {
  let params = useParams();
  return <h2>Invoice: {params.profileId}</h2>;
}