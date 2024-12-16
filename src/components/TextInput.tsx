import { ComponentPropsWithoutRef } from "react";
import { Control, useController } from "react-hook-form";

type TextInputProps = ComponentPropsWithoutRef<"input"> & {
  label?: string;
  type: string;
  name: string;
  check?: boolean;
  className?: string;
  control: Control<any>;
};

const TextInput = ({
  label,
  type,
  control,
  name,
  check,
  className,
  ...inputProps
}: TextInputProps) => {
  const {
    formState: { errors },
  } = useController({ control, name });

  return (
    <div
      className={`flex ${
        check ? "flex-row items-center " : "flex-col"
      } gap-2 relative`}
    >
      {check ? (
        <>
          <input
            type={type}
            id={label}
            {...control.register(name)}
            className={`border ${
              errors[name]
                ? "border-red-500 focus:outline-red-500"
                : "border-gray-200 focus:outline-blue-700"
            }  py-2  disabled:bg-gray-200 focus:outline-4 rounded-md px-5 ps-5 placeholder:text-sm`}
            {...inputProps}
          />
          {label && (
            <label
              htmlFor={label}
              className={`md:text-base text-sm ${
                errors[name] ? "text-red-500" : ""
              } ${className}`}
            >
              {label}
            </label>
          )}
        </>
      ) : (
        <>
          {label && (
            <label
              htmlFor={label}
              className={`md:text-base text-sm ${
                errors[name] ? "text-red-500" : ""
              } ${className}`}
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
            }  py-2 disabled:bg-gray-200  focus:outline-4 rounded-md px-5 ps-5 placeholder:text-sm`}
            {...inputProps}
          />
        </>
      )}

      {errors[name] && (
        <p className="text-red-500 text-sm">
          {errors[name]?.message?.toString()}
        </p>
      )}
    </div>
  );
};

export default TextInput;
