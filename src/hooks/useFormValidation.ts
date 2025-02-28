import { useState } from 'react';
import { z, ZodSchema } from 'zod';

const useFormValidation = <T>(schema: ZodSchema<T>) => {
    const [formData, setFormData] = useState<T>({} as T);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const validate = () => {
        try {
            schema.parse(formData);
            setErrors({}); // Clear errors if validation passes
            return true;
        } catch (err) {
            if (err instanceof z.ZodError) {
                const formattedErrors = err.errors.reduce((acc: { [key: string]: string }, curr) => {
                    acc[curr.path[0]] = curr.message;
                    return acc;
                }, {});
                setErrors(formattedErrors);
            }
            return false;
        }
    };

    return { formData, setFormData, errors, handleChange, validate };
};

export default useFormValidation;
