import { useEffect, useState } from "react";

function Listings() {
  const [properties, setProperties] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetch("https://68b826bcb715405043274639.mockapi.io/api/properties/PropertyListing")
      .then((res) => res.json())
      .then((data) => setProperties(data))
      .catch((err) => console.error("Error fetching properties:", err));
  }, []);

  const filteredProperties =
    filter === "all"
      ? properties
      : properties.filter((p) =>
          filter === "sale" ? p.cardinalDirection === "South" : p.cardinalDirection !== "South"
        );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Property Listings</h1>

      {/* Filter Buttons */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setFilter("all")}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          All
        </button>
        <button
          onClick={() => setFilter("sale")}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          For Sale
        </button>
        <button
          onClick={() => setFilter("rent")}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          For Rent
        </button>
      </div>

      {/* Property Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredProperties.map((property) => (
          <div
            key={property.id}
            className="border rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={property.image}
              alt={property.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{property.name}</h2>
              <p className="text-sm text-gray-600">{property.city}, {property.state}</p>
              <p className="text-sm mt-2">Owner: {property.ownerName}</p>
              <p className="text-sm">Contact: {property.contactNumber}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Listings;
