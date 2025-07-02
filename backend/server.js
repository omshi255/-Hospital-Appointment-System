import express  from 'express';
import connectToDatabase from './dbconn.js';
import router from './routes/user.routes.js';
import cors from 'cors';
import appointmentRoutes from './routes/appointmentroute.js';


const allowedOrigins = [
  'https://hospital-appointment-system-mern-frontend.onrender.com/'
];

app.use(cors({
  origin: allowedOrigins,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

const app = express();
app.use(cors());
import dotenv from 'dotenv';    
dotenv.config();
const PORT = process.env.PORT || 3000;
connectToDatabase();
app.use(express.json());
app.use('/api/users', router);
app.use('/api/appointments', appointmentRoutes);
app.get('/', (req, res) => {
  res.send('Hello, World!');
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
