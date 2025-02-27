import React from 'react';
import InputField from './InputFields';
import RadioButtonGroup from './RadioButtonGroup';
import { FormData } from './FormData';

interface FormRightColumnProps {
    formData: FormData;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    handleRadioChange: (value: string) => void;
    errors: { [key: string]: string };
}

const FormRightColumn: React.FC<FormRightColumnProps> = ({ formData, handleChange, handleRadioChange, errors }) => {
    return (
        <div className="space-y-4 flex flex-col justify-between">
            <div className='space-y-4'>
                <InputField
                    id="estimateGuestCount"
                    name="estimateGuestCount"
                    type="text"
                    value={formData.estimateGuestCount}
                    onChange={handleChange}
                    placeholder="Enter estimated guest count"
                    label="Estimate Guest Count"
                    error={errors.estimateGuestCount}
                />
                <div className="space-y-1">
                    <label htmlFor="eventDescription" className="block text-3xl text-start">
                        Tell Us About Your Event
                    </label>
                    <textarea
                        id="eventDescription"
                        name="eventDescription"
                        placeholder="Write here"
                        value={formData.eventDescription}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-3 py-2 border-2 border-text bg-background rounded-lg focus:ring-roseGold focus:ring-2 focus:outline-none text-xl"
                    />
                    {errors.eventDescription && <p className="text-red-500 text-start text-lg">{errors.eventDescription}</p>}
                </div>

                <RadioButtonGroup
                    name="eventType"
                    options={[
                        { value: "Wedding", label: "Wedding" },
                        { value: "Social", label: "Social" },
                        { value: "Party", label: "Party" },
                        { value: "Family", label: "Family" },
                        { value: "Corporate", label: "Corporate" },
                        { value: "Design", label: "Design" },
                        { value: "Other", label: "Other" },
                    ]}
                    selectedValue={formData.eventType}
                    onChange={handleRadioChange}
                    error={errors.eventType}
                />

            </div>

            {/* Submit Button - Full Width */}
            <div className="mt-auto">
                <button
                    type="submit"
                    className="w-full py-3 bg-[#1a2e29] text-white rounded hover:bg-[#15231f] transition-colors"
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default FormRightColumn;
