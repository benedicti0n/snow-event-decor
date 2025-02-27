// RadioButtonGroup.tsx
import React from 'react';

interface RadioButtonGroupProps {
    name: string;
    options: { value: string; label: string }[];
    selectedValue: string;
    onChange: (value: string) => void;
    error?: string;
}

const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({ name, options, selectedValue, onChange, error }) => {
    return (
        <div className="space-y-2">
            <p className="block text-3xl text-start">What Type of Event?</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {options.map((option) => (
                    <div className="flex items-center" key={option.value}>
                        <input
                            type="radio"
                            id={option.value}
                            name={name}
                            checked={selectedValue === option.value}
                            onChange={() => onChange(option.value)}
                            className="mr-2 w-6 h-6 bg-background border-text text-text"
                        />
                        <label htmlFor={option.value} className="text-xl">
                            {option.label}
                        </label>
                    </div>
                ))}
            </div>
            {error && <p className="text-red-500 text-start text-lg">{error}</p>} {/* Error message */}
        </div>
    );
};

export default RadioButtonGroup;