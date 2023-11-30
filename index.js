import pgPromise from 'pg-promise';
import express from 'express';

import FuelConsumption from './services/fuel-consumption.js';
import FuelConsumptionAPI from './api/fuel-consumption-api.js';

const pgp = pgPromise();

const connectionOptions = {
    connectionString: process.env.DATABASE_URL || 'postgres://fjdyvrnh:qejka4Wow2D-fhKk5yS1OrOyxd5m5f9k@snuffleupagus.db.elephantsql.com/fjdyvrnh',
    ssl: process.env.NODE_ENV === 'production', // Enable SSL in production
};

const db = pgp(connectionOptions);

const fuelConsumption = FuelConsumption(db);
const fuelConsumptionAPI = FuelConsumptionAPI(fuelConsumption)

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/api/vehicles', fuelConsumptionAPI.vehicles);
app.get('/api/vehicle', fuelConsumptionAPI.vehicle);
app.post('/api/vehicle', fuelConsumptionAPI.addVehicle);
app.post('/api/refuel', fuelConsumptionAPI.refuel);

app.listen(PORT, () => console.log(`App started on port: ${PORT}`));

