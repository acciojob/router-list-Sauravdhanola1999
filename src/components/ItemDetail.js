import React from "react";
import { useParams, Link } from "react-router-dom";

const items = [
  { id: 1, name: "Item One", description: "This is Item One." },
  { id: 2, name: "Item Two", description: "This is Item Two." },
  { id: 3, name: "Item Three", description: "This is Item Three." },
];

export default function ItemDetail() {
  const { id } = useParams();
  const item = items.find((item) => item.id === parseInt(id));

  if (!item) {
    return <h2>Item not found</h2>;
  }

  return (
    <div>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <Link to="/">Back to Item List</Link>
    </div>
  );
}
