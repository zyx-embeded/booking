const Booking = require("../../model/booking");

async function reserveTable(req, res) {
  const bookingData = await new Booking({
    tableId: req.params.id,
    startTime: new Date(req.body.startTime),
    endTime: new Date(req.body.endTime),
    userId: req.body.userId
  }).save();
  res.status201.json({
    success: "Your reservation is complete",
    data: bookingData
  });
}

async function confirmOwner(bookingId, userId) {
  const booking = await Booking.findById(bookingId);
  if (booking.userId != userId) {
    return res.status404.json("Your reservation not found");
  }
}

async function editReservedTable(req, res) {
  const newBookingTime = {
    startTime: new Date(req.body.startTime),
    endTime: new Date(req.body.endTime)
  };

  confirmOwner(req.params.id, req.body.userId);

  const booking = await Booking.findByIdAndUpdate(
    req.params.id,
    {
      $set: { newBookingTime }
    },
    { new: true }
  );
  res.status201.json({ success: "You edited successful ", data: booking });
}

async function deleteReservedTable(req, res) {
  confirmOwner(req.params.id, req.body.userId);
  await Booking.findByIdAndRemove(req.params.id);
  res.status201.json({ success: "you deleted your reservation" });
}

module.exports = {
  reserveTable,
  editReservedTable,
  deleteReservedTable
};
