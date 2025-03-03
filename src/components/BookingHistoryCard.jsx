const BookingHistoryCard = ({ booking }) => {
  return (
    <div className="bg-white shadow-lg rounded-none p-6 border border-gray-200 hover:shadow-xl transition">
      <h2 className="text-xl font-semibold text-gray-900">{booking.type}</h2>
      <p className="text-gray-600">{booking.location.Address}</p>
      <div className="mt-4">
        <p className="text-gray-700 font-medium">{booking.name}</p>
        <p className="text-gray-500 text-sm">{booking.email}</p>
      </div>
      <div className="mt-4 flex items-center gap-6">
        <span className="inline-block bg-sky-50 text-sky-500 text-sm font-semibold px-3 py-1 rounded-full">
          {booking.date}
        </span>
        <span className="inline-block bg-sky-50 text-sky-500 text-sm font-semibold px-3 py-1 rounded-full">
          {booking.timeSlot}
        </span>
      </div>
    </div>
  );
};

export default BookingHistoryCard;
