import React from 'react';

interface InputFieldProps {
    id: string;
    name: string;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    label: string;
    error?: string;
}

const InputField: React.FC<InputFieldProps> = ({ id, name, type, value, onChange, placeholder, label, error }) => {
    return (
        <div className="space-y-1">
            <label htmlFor={id} className="block text-3xl text-start">
                {label}
            </label>
            <input
                type={type}
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                className="w-full px-3 py-2 border-2 border-text bg-background rounded-lg focus:ring-roseGold focus:ring-2 focus:outline-none text-xl"
                placeholder={placeholder}
            />
            {error && <p className="text-red-500 text-start text-lg">{error}</p>} {/* Error message */}
        </div>
    );
};

export default InputField;
