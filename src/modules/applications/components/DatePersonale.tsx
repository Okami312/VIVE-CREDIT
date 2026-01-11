import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Controller } from "react-hook-form";
import { PhoneInput } from "react-international-phone";
import type { StepPropsWithWatch } from "../types";
import ApplicationFormField from "./ApplicationFormField";

function DatePersonale({ register, errors, control }: StepPropsWithWatch) {
  return (
    <>
      <ApplicationFormField
        register={register}
        errors={errors}
        name='nume'
        labelText='Nume'
        placeholder='Popescu'
      />

      <ApplicationFormField
        register={register}
        errors={errors}
        name='prenume'
        labelText='Prenume'
        placeholder='Ion'
      />
      <ApplicationFormField
        register={register}
        errors={errors}
        name='cnp'
        labelText='CNP'
        placeholder='1991012204431'
      />

      {/* Adresa */}
      <div>
        <Label htmlFor='judet' className='dark:text-[#c7d5ff]'>
          Judet <span className='text-red-500'>*</span>
        </Label>
        <Input
          type='text'
          {...register("adresa.judet")}
          placeholder='Hunedoara'
          id='judet'
          className={cn(
            "bg-white dark:bg-[#0c1324] text-gray-900 dark:text-[#c7d5ff] border",
            errors.adresa?.judet?.message
              ? "border-red-500 dark:border-red-400"
              : "border-gray-300 dark:border-[#243247]"
          )}
        />
        <p className='mt-1 text-sm text-red-500'>
          {errors.adresa?.judet?.message}
        </p>
      </div>
      <div>
        <Label htmlFor='localitate' className='dark:text-[#c7d5ff]'>
          Localitate <span className='text-red-500'>*</span>
        </Label>
        <Input
          type='text'
          {...register("adresa.localitate")}
          placeholder='Deva'
          id='localitate'
          className={cn(
            "bg-white dark:bg-[#0c1324] text-gray-900 dark:text-[#c7d5ff] border",
            errors.adresa?.localitate?.message
              ? "border-red-500 dark:border-red-400"
              : "border-gray-300 dark:border-[#243247]"
          )}
        />
        <p className='mt-1 text-sm text-red-500'>
          {errors.adresa?.localitate?.message}
        </p>
      </div>
      <div>
        <Label htmlFor='adresa1' className='dark:text-[#c7d5ff]'>
          Adresa 1 <span className='text-red-500'>*</span>
        </Label>
        <Input
          type='text'
          {...register("adresa.adresa1")}
          placeholder='Str. Lalelelor, nr. 2'
          id='adresa1'
          className={cn(
            "bg-white dark:bg-[#0c1324] text-gray-900 dark:text-[#c7d5ff] border",
            errors.adresa?.adresa1?.message
              ? "border-red-500 dark:border-red-400"
              : "border-gray-300 dark:border-[#243247]"
          )}
        />
        <p className='mt-1 text-sm text-red-500'>
          {errors.adresa?.adresa1?.message}
        </p>
      </div>
      <div>
        <Label htmlFor='adresa2' className='dark:text-[#c7d5ff]'>
          Adresa 2
        </Label>
        <Input
          type='text'
          {...register("adresa.adresa2")}
          placeholder='Sc. 1, Et. 2, ap. 12'
          id='adresa2'
          className={cn(
            "bg-white dark:bg-[#0c1324] text-gray-900 dark:text-[#c7d5ff] border border-gray-300 dark:border-[#243247]"
          )}
        />
      </div>
      <div>
        <Label htmlFor='codPostal' className='dark:text-[#c7d5ff]'>
          Cod Postal
        </Label>
        <Input
          type='text'
          {...register("adresa.codPostal")}
          placeholder='330090'
          id='codPostal'
          className={cn(
            "bg-white dark:bg-[#0c1324] text-gray-900 dark:text-[#c7d5ff] border border-gray-300 dark:border-[#243247]"
          )}
        />
      </div>
      {/* End adresa */}
      <ApplicationFormField
        register={register}
        errors={errors}
        name='adresaEmail'
        labelText='Adresa Email'
        placeholder='example@info.com'
      />

      <div>
        <Label htmlFor='telefon' className='dark:text-[#c7d5ff]'>
          Telefon <span className='text-red-500'>*</span>
        </Label>
        <Controller
          name='telefon'
          control={control}
          render={({ field }) => (
            <PhoneInput
              defaultCountry='ro'
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              className='w-full'
              inputClassName='!w-full !px-3 !py-2 !ml-1 !rounded-md !border !border-gray-300 !bg-white !text-gray-900 focus:!ring-2 focus:!ring-blue-400 focus:!outline-none dark:!bg-[#0c1324] dark:!text-[#c7d5ff] dark:!border-[#243247]'
              countrySelectorStyleProps={{
                buttonClassName:
                  "!h-full !px-2 !bg-white !border !border-gray-300 !border-r-0 !rounded-l-md dark:!bg-[#0c1324] dark:!border-[#243247] dark:!text-[#c7d5ff]",
                dropdownClassName:
                  "!bg-white !text-gray-900 dark:!bg-[#0c1324] dark:!text-[#c7d5ff] dark:!border-[#243247]",
              }}
              placeholder='+40 XXXXXXXX'
              hideDropdown={true}
            />
          )}
        />
        <p className='mt-1 text-sm text-red-500'>{errors.telefon?.message}</p>
      </div>
    </>
  );
}

export default DatePersonale;
