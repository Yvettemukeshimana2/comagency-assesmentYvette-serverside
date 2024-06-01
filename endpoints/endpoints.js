import express from "express";
import { createCustomer, deleteCustomerById, getCustomerById, getCustomers, updateCustomerById } from "../controllers/crud.js";

const customerRouter = express.Router();

// Create a new customer
customerRouter.post('/create-customer', createCustomer);

// Get all customers
customerRouter.get('/get-alll-customers', getCustomers);

// Get customer by ID
customerRouter.get('/get-customer-by-id/:id', getCustomerById);

// Update customer by ID
customerRouter.put('/update-customer/:id', updateCustomerById);

// Delete customer by ID
customerRouter.delete('/delete-customer/:id', deleteCustomerById);

export default customerRouter;
