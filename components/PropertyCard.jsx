export default function PropertyCard({ property }) {
  return (
    <div className="border rounded-lg p-3 shadow-md">
      <img src={property.image} alt={property.name} className="rounded-lg mb-2 h-40 w-full object-cover" />
      <h3 className="font-bold text-lg">{property.name}</h3>
      <p>{property.city}, {property.country}</p>
      <p className="text-sm text-gray-600">Owner: {property.ownerName}</p>
    </div>
  );
}
