"use client"
import React from 'react';
import { z } from 'zod';
import FormColumn from './FormColumn';
import FormRightColumn from './FormRightColumn';
import useFormValidation from '@/hooks/useFormValidation';

// Define the validation schema using Zod
const formSchema = z.object({
    fullName: z.string().min(1, { message: "Full Name is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    phoneNumber: z.string().min(10, { message: "Phone Number must be at least 10 digits" }),
    location: z.string().min(1, { message: "Location is required" }),
    eventDate: z.string().min(1, { message: "Event Date is required" }),
    estimateBudget: z.string().min(1, { message: "Estimate Budget is required" }),
    estimateGuestCount: z.string().min(1, { message: "Estimate Guest Count is required" }),
    eventDescription: z.string().optional(),
    eventType: z.string().min(1, { message: "Event Type is required" }),
});

const FormSection = () => {
    const { formData, setFormData, errors, handleChange, validate } = useFormValidation(formSchema);
    const [jsonOutput, setJsonOutput] = React.useState("");

    const handleRadioChange = (value: string) => {
        setFormData((prev) => ({
            ...prev,
            eventType: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            const jsonData = JSON.stringify(formData, null, 2);
            setJsonOutput(jsonData);
            console.log(jsonData);
        }
    };

    return (
        <div id='contactUs' className='w-full bg-background font-bacasime flex flex-col items-center justify-center text-center px-8 md:px-16'>
            <h1 className='mb-4 md:mb-8 text-2xl md:text-3xl md:w-1/2'>Congratulations on your celebration to be. <br />
                Please fill out the contact form below and we will
                email you to set up a complimentary consultation.
            </h1>

            <div className="w-full mx-auto p-6">
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                    {/* Left Column */}
                    <FormColumn formData={formData} handleChange={handleChange} errors={errors} />

                    {/* Right Column */}
                    <FormRightColumn
                        formData={formData}
                        handleChange={handleChange}
                        handleRadioChange={handleRadioChange}
                        errors={errors}
                    />
                </form>

                {jsonOutput && (
                    <div className="mt-8 p-4 bg-gray-100 rounded">
                        <h3 className="text-lg font-medium mb-2">Form Data (JSON):</h3>
                        <pre className="whitespace-pre-wrap">{jsonOutput}</pre>
                    </div>
                )}
            </div>
        </div>
    )
}

export default FormSection;