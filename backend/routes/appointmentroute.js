import express from "express";
import {
  bookAppointment,
  getAppointments,
  cancelAppointment,
} from "../controller/appointment.controller.js";
import { authenticateToken } from "../middleware/auth.middleware.js"; 

const router = express.Router();


router.post("/book", authenticateToken, bookAppointment);       
router.get("/", authenticateToken, getAppointments);            
router.delete("/:id", authenticateToken, cancelAppointment);    

export default router;
