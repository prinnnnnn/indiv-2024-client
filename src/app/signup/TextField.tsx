import { Field, ErrorMessage } from "formik";
import "../ui/FormInput.css";
import { useTheme } from "../ui/ThemeContext";

interface CustomInputProps {
    label: string;
    name: string;
    type: string;
    placeholder?: string;
}

const TextField = ({ label, name, type, placeholder }: CustomInputProps) => {
    
    const { palette } = useTheme();
    
    return (
        <div className="relative z-0 w-full mb-5 group">
            <Field
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                className={`block py-2.5 px-0 w-full text-sm text-${palette.text}
                         bg-transparent border-0 border-b-2 border-${palette.primary}
                          appearance-none
                            focus:outline-none focus:ring-0
                            focus:border-${palette.primary} peer`}
            />
            <label
                htmlFor={name}
                className={`peer-focus:font-medium absolute text-sm text-${palette.primary}
                 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0
                  rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-${palette.primary}
                 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                   peer-focus:scale-75 peer-focus:-translate-y-6`}
            >
                {label}
            </label>
            <ErrorMessage
                name={name}
                component="div"
                className={`text-${palette.error} text-sm mt-1`}
            />
        </div>
    );
};

export default TextField;
