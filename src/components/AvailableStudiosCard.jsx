import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const AvailableStudiosCard = ({ studio }) => {
  const {
    Id,
    Name,
    Type,
    Location,
    Amenities = [],
    PricePerHour,
    Currency,
  } = studio || {};

  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(storedBookings);
  }, [setBookings]);

  const handleBooking = () => {
    if (!date || !timeSlot || !name || !email) {
      toast.error("All fields are required.");
      return;
    }

    const isSlotBooked = bookings.some(
      (booking) =>
        booking.studioId === Id &&
        booking.date === date &&
        booking.timeSlot === timeSlot
    );

    if (isSlotBooked) {
      toast.error(
        "The selected time slot is not available. Please choose another time."
      );
      return;
    }

    const newBooking = {
      studioId: Id,
      studioName: Name,
      date,
      timeSlot,
      name,
      email,
      location: Location,
      type: Type,
    };
    const updatedBookings = [...bookings, newBooking];
    setBookings(updatedBookings);
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));
    toast.success("Booking successful!");
    document.getElementById(`booking_modal_${Id}`).close();
  };

  return (
    <div>
      <div className="h-[350px] flex flex-col justify-between bg-white shadow-lg p-4 border border-gray-200">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">{Name}</h2>
          <p className="text-teal-500 font-medium">{Type}</p>
          <p className="text-gray-600 text-sm">
            {Location?.Address}, {Location?.Area}, {Location?.City}
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
          <button
            onClick={() =>
              document.getElementById(`booking_modal_${Id}`).showModal()
            }
            className="mt-4 w-full bg-sky-500 text-white py-2 hover:bg-sky-600 transition cursor-pointer font-medium"
          >
            Book Now
          </button>
        </div>
      </div>

      <dialog id={`booking_modal_${Id}`} className="modal">
        <div className="modal-box">
          <h2 className="text-xl font-bold">Book {Name}</h2>
          <div className="mt-4">
            <label className="block mb-2">Select Date:</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="border p-2 w-full"
            />
          </div>
          <div className="mt-4">
            <label className="block mb-2">Select Time Slot:</label>
            <select
              value={timeSlot}
              onChange={(e) => setTimeSlot(e.target.value)}
              className="border p-2 w-full"
            >
              <option value="">-- Select Time --</option>
              <option value="09:00">09:00</option>
              <option value="09:30">09:30</option>
              <option value="10:00">10:00</option>
              <option value="10:30">10:30</option>
              <option value="11:00">11:00</option>
            </select>
          </div>
          <div className="mt-4">
            <label className="block mb-2">Your Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border p-2 w-full"
            />
          </div>
          <div className="mt-4">
            <label className="block mb-2">Your Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border p-2 w-full"
            />
          </div>
          <div className="mt-4 flex justify-end gap-3">
            <button
              className="mt-4 w-32 bg-red-500 text-white py-2 hover:bg-red-600 transition cursor-pointer font-medium"
              onClick={() =>
                document.getElementById(`booking_modal_${Id}`).close()
              }
            >
              Cancel
            </button>
            <button
              className="mt-4 w-40 bg-sky-500 text-white py-2 hover:bg-sky-600 transition cursor-pointer font-medium"
              onClick={handleBooking}
            >
              Confirm Booking
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default AvailableStudiosCard;
