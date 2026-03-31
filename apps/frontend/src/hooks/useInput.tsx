import type { myInputType } from "../types/props/myInputType"
import { useState } from "react"

type InputProp = {
    input: myInputType
};

export default function useInput ({ input } : InputProp) {
    const [value, setValue] = useState("");
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validate = () => {
        if (!value) {
            return `${input.name} is required`;
        }

        if (value.length < Number(input.minLength)) {
            return `${input.name} must be at least ${input.minLength} long`;
        }

        return "";
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        setError("");
    };

    const handleSubmit = async (callback: (value: string) => Promise<void>) => {
        const validationError = validate();

        if (validationError) {
            setError(validationError);
            return;
        }

        setIsSubmitting(true);
        await callback(value);
        setIsSubmitting(false);
        setValue("");
    };

    return {
        value,
        error,
        isSubmitting,
        onChange,
        handleSubmit,
    };
}