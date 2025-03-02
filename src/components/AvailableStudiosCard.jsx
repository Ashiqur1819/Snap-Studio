

const AvailableStudiosCard = ({studio}) => {
    const {Name, Type, Location, Amenities, PricePerHour, Currency, Rating } =
      studio || {};

    return (
      <div className="bg-white shadow-lg rounded-none p-4 border border-gray-200 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">{Name}</h2>
          <p className="text-teal-500 font-medium">{Type}</p>
          <p className="text-gray-600 text-sm">
            {Location.Address}, {Location.Area}, {Location.City}
          </p>

          <div className="mt-2">
            <p className="text-gray-700 font-semibold">Amenities:</p>
            <ul className="text-gray-600 text-sm list-disc list-inside">
              {Amenities.slice(0, 3).map((amenity, index) => (
                <li key={index}>{amenity}</li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <div className="mt-3 flex justify-between items-center">
            <span className="text-gray-700 text-lg font-bold">
              {PricePerHour} {Currency}
            </span>
          </div>
          <button className="mt-4 w-full bg-sky-500 text-white py-2 rounded-none hover:bg-sky-600 transition cursor-pointer">
            Book Now
          </button>
        </div>
      </div>
    );
};

export default AvailableStudiosCard;