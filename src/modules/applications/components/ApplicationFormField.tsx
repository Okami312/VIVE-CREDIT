import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import type { FieldName, StepProps } from "../types";

type ApplicationFormFieldProps = StepProps & {
  name: FieldName;
  type?: string;
  labelText: string;
  isRequired?: boolean;
  placeholder?: string;
};

function ApplicationFormField({
  register,
  errors,
  name,
  type = "text",
  labelText,
  isRequired = true,
  placeholder,
}: ApplicationFormFieldProps) {
  console.log(errors);
  return (
    <div>
      <Label htmlFor={name} className='dark:text-[#c7d5ff]'>
        {labelText} {isRequired && <span className='text-red-500'>*</span>}
      </Label>
      <Input
        type={type}
        {...register(name)}
        placeholder={placeholder}
        id={name}
        className={cn(
          "bg-white dark:bg-[#0c1324] text-gray-900 dark:text-[#c7d5ff] border",
          errors[name]?.message
            ? "border-red-500 dark:border-red-400"
            : "border-gray-300 dark:border-[#243247]"
        )}
      />
      <p className='mt-1 text-sm text-red-500'>
        {errors[name]?.message as string}
      </p>
    </div>
  );
}

export default ApplicationFormField;
