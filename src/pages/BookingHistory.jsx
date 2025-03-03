import { useEffect, useState } from "react";
import BookingHistoryCard from "../components/BookingHistoryCard";

const BookingHistory = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(storedBookings);
  }, [setBookings]);

  return (
    <div className="px-4 md:px-6 lg:px-8 mt-12">
      <h2 className="text-3xl md:text-4xl text-center font-bold text-gray-700 mb-3">
        Booking History
      </h2>
      <p className="max-w-3xl mx-auto text-center text-gray-600">
        A record of all past reservations made by a user, including details like
        dates, locations, services, events, and payment information, helping
        users track past and manage future bookings.
      </p>
      <div>
        {bookings.length < 1 ? (
          <div className="col-span-4 h-80 w-full flex items-center justify-center bg-red-50 mt-12">
            <h2 className="text-3xl md:text-4xl font-bold text-red-600">
              No Booking Studios Right Now
            </h2>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            {bookings.map((booking) => (
              <BookingHistoryCard
                booking={booking}
                key={booking.Id}
              ></BookingHistoryCard>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingHistory;
