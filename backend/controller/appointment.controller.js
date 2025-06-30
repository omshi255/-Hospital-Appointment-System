import {Appointment} from "../models/appoinment.model.js";

// Create appointment
export const bookAppointment = async (req, res) => {
  const { name, phone, reason, description } = req.body;

  try {
    const appointment = await Appointment.create({
      name,
      phone,
      reason,
      description,
    });
    res.status(201).json({
      message: "Appointment booked successfully",
      appointment,
    });
  } catch (err) {
    console.error("Booking error:", err);
    res.status(500).json({ message: "Failed to book appointment" });
  }
};

// Get all appointments
export const getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find().sort({ createdAt: -1 });
    res.status(200).json(appointments);
  } catch (err) {
    res.status(500).json({ message: "Failed to get appointments" });
  }
};

// Cancel appointment
export const cancelAppointment = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Appointment.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: "Appointment not found" });
    res.json({ message: "Appointment cancelled successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to cancel appointment" });
  }
};
