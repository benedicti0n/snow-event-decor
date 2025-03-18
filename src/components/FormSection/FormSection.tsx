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
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'success' | 'error'>('idle');

    const handleRadioChange = (value: string) => {
        setFormData((prev) => ({
            ...prev,
            eventType: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            setIsSubmitting(true);
            setSubmitStatus('idle');

            // Create a formatted email template
            const emailTemplate = `
New Event Inquiry Details:

👤 Contact Information:
----------------------
Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phoneNumber}
Location: ${formData.location}

📅 Event Details:
----------------
Event Type: ${formData.eventType}
Event Date: ${formData.eventDate}
Estimated Guest Count: ${formData.estimateGuestCount}
Estimated Budget: ${formData.estimateBudget}

📝 Event Description:
-------------------
${formData.eventDescription || 'No description provided'}

---
This inquiry was submitted through the Snow Event Decor website.
`;

            try {
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                        access_key: 'aba6265b-8f1e-494b-a9d1-3512e4d97011',
                        from_name: formData.fullName,
                        email: formData.email,
                        subject: `New Event Inquiry: ${formData.eventType} - ${formData.fullName}`,
                        message: emailTemplate
                    })
                });

                const result = await response.json();

                if (result.success) {
                    setSubmitStatus('success');
                    setJsonOutput(JSON.stringify(formData, null, 2));
                } else {
                    setSubmitStatus('error');
                }
            } catch (error) {
                setSubmitStatus('error');
                console.error('Error submitting form:', error);
            } finally {
                setIsSubmitting(false);
            }
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

                {isSubmitting && (
                    <div className="mt-4 text-center text-2xl">
                        <p className="text-gray-600">Sending your message...</p>
                    </div>
                )}

                {submitStatus === 'success' && (
                    <div className="mt-4 text-center text-green-600 text-2xl">
                        <p>Thank you! Your message has been sent successfully.</p>
                    </div>
                )}

                {submitStatus === 'error' && (
                    <div className="mt-4 text-center text-red-600 text-2xl">
                        <p>Sorry, there was an error sending your message. Please try again later.</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default FormSection;