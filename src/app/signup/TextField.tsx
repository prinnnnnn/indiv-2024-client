import { Field, ErrorMessage } from "formik";

interface CustomInputProps {
    label: string;
    name: string;
    type: string;
    placeholder?: string;
}

const TextField = ({ label, name, type, placeholder }: CustomInputProps) => {
    return (
        <div className="w-full">
            <label
                htmlFor={name}
                className="text-gray-700 font-medium text-sm 
                             left-3 bg-white px-1 transform -translate-y-1/2"
            >
                {label}
            </label>
            <Field
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                className="w-full h-12 px-3 pt-2 pb-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2
                                 focus:ring-[#F3C623] focus:border-transparent transition-all"
            />
            <ErrorMessage
                name={name}
                component="div"
                className="text-red-500 text-sm mt-1"
            />
        </div>
    );
};

export default TextField;
