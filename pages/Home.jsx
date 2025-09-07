import { useEffect, useState } from "react";

function Home() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("https://68b826bcb715405043274639.mockapi.io/api/properties/PropertyListing")
      .then((res) => res.json())
      .then((data) => setProperties(data.slice(0, 3))) // show only first 3 as featured
      .catch((err) => console.error("Error fetching properties:", err));
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 text-center" style={{ backgroundImage: "url('https://picsum.photos/1600/600?random=1')" }}>
        
        <h1 className="text-4xl font-bold">Find Your Dream Home</h1>
        <p className="mt-4 text-lg">Browse from thousands of properties for sale and rent.</p>
      </section>

      {/* What We Do Section */}
      <section className="py-12 px-6 grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
        <div className="p-6 border rounded shadow">🏠 Buy Properties</div>
        <div className="p-6 border rounded shadow">💼 Sell Properties</div>
        <div className="p-6 border rounded shadow">🏢 Rent Properties</div>
        <div className="p-6 border rounded shadow">📊 Market Insights</div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-12 px-6">
        <h2 className="text-2xl font-bold mb-6">Featured Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {properties.map((property) => (
            <div key={property.id} className="border rounded-lg shadow-md overflow-hidden">
              <img src={property.image} alt={property.name} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{property.name}</h3>
                <p className="text-sm text-gray-600">{property.city}, {property.state}</p>
                <p className="text-sm mt-2">Owner: {property.ownerName}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
