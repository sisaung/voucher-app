import { ComponentPropsWithoutRef } from "react";
import { Control, useController } from "react-hook-form";

type TextInputProps = ComponentPropsWithoutRef<"input"> & {
  label?: string;
  type: string;
  name: string;
  control: Control<any>;
};

const TextInput = ({
  label,
  type,
  control,
  name,
  ...inputProps
}: TextInputProps) => {
  const {
    formState: { errors },
  } = useController({ control, name });

  return (
    <div className="flex flex-col gap-2 relative ">
      {label && (
        <label
          htmlFor={label}
          className={`${errors[name] ? "text-red-500" : ""}`}
        >
          {label}
        </label>
      )}
      <input
        type={type}
        id={label}
        {...control.register(name)}
        className={`border ${
          errors[name]
            ? "border-red-500 focus:outline-red-500"
            : "border-gray-200 focus:outline-blue-700"
        }  py-2   focus:outline-4 rounded-md px-5 ps-5 placeholder:text-sm`}
        {...inputProps}
      />
      {errors[name] && (
        <p className="text-red-500 text-sm">
          {errors[name]?.message?.toString()}
        </p>
      )}
    </div>
  );
};

export default TextInput;
