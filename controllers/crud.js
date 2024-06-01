import Customer from "../models/customerModel.js";
import { sendEmail } from "../utils/emailUtility.js";

// Create a new customer
export const createCustomer = async (req, res) => {
    try {
        const {
            fullName,
            age,
            gender,
            nationality,
            identification,
            passport,
            purposeOfVisit,
            durationOfStay,
            dateOfEntry,
            portOfEntry,
            emailAddress,
            phoneNumber
        } = req.body;

        const savedCustomer =await  Customer.create({
            fullName,
            age,
            gender,
            nationality,
            identification,
            passport,
            purposeOfVisit,
            durationOfStay,
            dateOfEntry,
            portOfEntry,
            emailAddress,
            phoneNumber
        });

      
         // Prepare email content
    const subject = "Customer Registration Confirmation";
    const textContent = `Dear ${fullName},\n\nThank you for registering. Your details have been successfully saved.\n\nRegards,\ncom-agency Company`;
    const htmlContent = `<p>Dear ${fullName},</p><p>Thank you for registering. Your details have been successfully saved.</p><p>Regards,<br>com-agency Company</p>`;

    // Send confirmation email

    await sendEmail(emailAddress, subject, textContent, htmlContent);

        res.status(201).json({ message: "Customer created successfully", customer: savedCustomer });
    } catch (error) {
        res.status(500).json({ message: `Failed to create customer: ${error.message}` });
    }
}

// Get all customers
export const getCustomers = async (req, res) => {
    try {
        const customers = await Customer.find();
        res.json({ message: "Customers retrieved successfully", customers });
    } catch (error) {
        res.status(500).json({ message: `Failed to retrieve customers: ${error.message}` });
    }
}

// Get customer by ID
export const getCustomerById = async (req, res) => {
    try {
        const customer = await Customer.findById(req.params.id);
        if (!customer) {
            return res.status(404).json({ message: "Customer not found" });
        }
        res.json({ message: "Customer retrieved successfully", customer });
    } catch (error) {
        res.status(500).json({ message: `Failed to retrieve customer: ${error.message}` });
    }
}

// Update customer by ID
export const updateCustomerById = async (req, res) => {
    try {
        const customer = await Customer.findById(req.params.id);
        if (!customer) {
            return res.status(404).json({ message: "Customer not found" });
        }

        const { fullName, age, gender, nationality, identification, passport, purposeOfVisit, durationOfStay, dateOfEntry, portOfEntry, emailAddress, phoneNumber } = req.body;

        const updatedCustomer = await Customer.findByIdAndUpdate(req.params.id, {
            fullName,
            age,
            gender,
            nationality,
            identification,
            passport,
            purposeOfVisit,
            durationOfStay,
            dateOfEntry,
            portOfEntry,
            emailAddress,
            phoneNumber
        }, { new: true });

        res.json({ message: "Customer updated successfully", customer: updatedCustomer });
    } catch (error) {
        res.status(500).json({ message: `Failed to update customer: ${error.message}` });
    }
}

// Delete customer by ID
export const deleteCustomerById = async (req, res) => {
    try {
        const customer = await Customer.findById(req.params.id);
        if (!customer) {
            return res.status(404).json({ message: "Customer not found" });
        }

        await Customer.findByIdAndDelete(req.params.id);
        res.json({ message: "Customer deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: `Failed to delete customer: ${error.message}` });
    }
}
