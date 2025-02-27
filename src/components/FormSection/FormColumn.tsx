import React from 'react';
import InputField from './InputFields';
import { FormData } from './FormData';

interface FormColumnProps {
    formData: FormData;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    errors: { [key: string]: string };
}

const FormColumn: React.FC<FormColumnProps> = ({ formData, handleChange, errors }) => {
    return (
        <div className="space-y-4">
            <InputField
                id="fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                label="Full Name"
                error={errors.fullName}
            />
            <InputField
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                label="Email"
                error={errors.email}
            />
            <InputField
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Enter your phone number"
                label="Phone Number"
                error={errors.phoneNumber}
            />
            <InputField
                id="location"
                name="location"
                type="text"
                value={formData.location}
                onChange={handleChange}
                placeholder="Enter your location"
                label="Location"
                error={errors.location}
            />
            <InputField
                id="eventDate"
                name="eventDate"
                type="text"
                value={formData.eventDate}
                onChange={handleChange}
                placeholder="MM/DD/YYYY"
                label="Event Date"
                error={errors.eventDate}
            />
            <InputField
                id="estimateBudget"
                name="estimateBudget"
                type="text"
                value={formData.estimateBudget}
                onChange={handleChange}
                placeholder="Enter your estimated budget"
                label="Estimate Budget"
                error={errors.estimateBudget}
            />
        </div>
    );
};

export default FormColumn;
