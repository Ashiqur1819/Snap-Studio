import { useEffect, useState } from "react";
import AvailableStudiosCard from "../components/AvailableStudiosCard";

const AvailableStudios = () => {
  const [studios, setStudios] = useState([]);

  const now = new Date();
  const currentTime = now.toTimeString().slice(0, 5);

  const availableStudios = studios.filter((studio) => {
    const openTime = studio?.Availability?.Open;
    const closeTime = studio?.Availability?.Close;

    return (
      openTime &&
      closeTime &&
      openTime <= currentTime &&
      closeTime >= currentTime
    );
  });

  useEffect(() => {
    fetch("studio-mock-api.json")
      .then((res) => res.json())
      .then((data) => setStudios(data));
  }, [setStudios]);

  return (
    <div className="px-4 md:px-6 lg:px-8 mt-12">
      <h2 className="text-3xl md:text-4xl text-center font-bold text-gray-700 mb-3">
        Available Studios
      </h2>
      <p className="max-w-3xl mx-auto text-center text-gray-600">
        Browse and book studios effortlessly. Compare options, check
        availability, and reserve the perfect space for your creative
        needs—whether for work, recording, or photography.
      </p>
      <div className="mt-12 flex items-center gap-6">
        <input
          type="text"
          placeholder="Search by Place"
          className="input w-full input-info focus:border-none focus:outline-offset-0"
        />
        <input
          type="text"
          placeholder="Search by Radius (10 km)"
          className="input w-full input-accent focus:border-none focus:outline-offset-0"
        />
      </div>
      <div>
        {availableStudios.length == 0 ? (
          <div className="h-80 w-full flex items-center justify-center bg-red-50 mt-12">
            <h2 className="text-3xl md:text-4xl font-bold text-red-600">
              No Available Studios Right Now
            </h2>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            {availableStudios.map((studio) => (
              <AvailableStudiosCard
                studio={studio}
                key={studio.Id}
              ></AvailableStudiosCard>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AvailableStudios;
