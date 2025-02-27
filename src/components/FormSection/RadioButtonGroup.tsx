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
                        <div className='border-2 border-text rounded-full mr-2 w-5 h-5 flex items-center justify-center'>
                            <input
                                type="radio"
                                id={option.value}
                                name={name}
                                checked={selectedValue === option.value}
                                onChange={() => onChange(option.value)}
                                className="rounded-full w-3 h-3 appearance-none cursor-pointer checked:bg-text"
                            />
                        </div>
                        <label htmlFor={option.value} className="text-xl">
                            {option.label}
                        </label>
                    </div>
                ))}
            </div>
            {error && <p className="text-red-500 text-start text-sm md:text-lg">{error}</p>} {/* Error message */}
        </div>
    );
};

export default RadioButtonGroup;