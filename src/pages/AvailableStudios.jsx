import { useEffect, useState } from "react";
import AvailableStudiosCard from "../components/AvailableStudiosCard";


const AvailableStudios = () => {

    const [studios, setStudios] = useState([])

    useEffect(() => {
        fetch("studio-mock-api.json")
        .then(res => res.json())
        .then(data => setStudios(data))
    }, [setStudios])


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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12">
          {studios.map((studio) => (
            <AvailableStudiosCard
              studio={studio}
              key={studio.Id}
            ></AvailableStudiosCard>
          ))}
        </div>
      </div>
    );
};

export default AvailableStudios;