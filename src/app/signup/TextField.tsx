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
        className={`input-peer block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 
                    appearance-none  focus:outline-none 
                    focus:ring-0 peer`}
        style={
          {
            "--primary-color": palette.primary,
            color: palette.text,
            "--autofill-text-color": palette.text,
          } as any
        }
      />
      <label
        htmlFor="floating_password"
        className={`label-peer peer-focus:font-medium absolute text-sm duration-300 transform
                     -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4
                       peer-placeholder-shown:scale-100
                       peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
        style={{ "--primary-color": palette.primary } as any}
      >
        {label}
      </label>
      <ErrorMessage
        name={name}
        component="div"
        className={"text-red-400 text-sm mt-1"}
      />
    </div>
  );
};

export default TextField;
