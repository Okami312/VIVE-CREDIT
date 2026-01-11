import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { Controller } from "react-hook-form";
import { type StepPropsWithWatch } from "../types";

function DetaliiCredit({
  register,
  errors,
  watch,
  control,
}: StepPropsWithWatch) {
  const sumaCeruta = watch("sumaCeruta");
  return (
    <>
      <div>
        <Label htmlFor='tipProdus' className='dark:text-[#c7d5ff]'>
          Tip Credit <span className='text-red-500'>*</span>
        </Label>
        <Controller
          name='tipProdus'
          control={control}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger
                id='tipProdus'
                className={cn(
                  "bg-white dark:bg-[#0c1324] text-gray-900 dark:text-[#c7d5ff] border"
                )}
              >
                <SelectValue placeholder='Selecteaza produs' />
              </SelectTrigger>
              <SelectContent
                id='tipProdus'
                className={cn(
                  "bg-white dark:bg-[#0c1324] text-gray-900 dark:text-[#c7d5ff] border"
                )}
              >
                <SelectItem value='Nevoi Personale'>Nevoi Personale</SelectItem>
                <SelectItem value='Auto'>Auto</SelectItem>
                <SelectItem value='Ipotecar'>Ipotecar</SelectItem>
              </SelectContent>
            </Select>
          )}
        />

        <p className='mt-1 text-sm text-red-500'>{errors.tipProdus?.message}</p>
      </div>
      <div>
        <Label htmlFor='sumaCeruta' className='dark:text-[#c7d5ff]'>
          De cati bani ai nevoie? <span className='text-red-500'>*</span>
        </Label>
        <div className='flex items-center gap-4'>
          <span className='px-3 rounded py-1 w-[90px] inline-flex items-center justify-center bg-white dark:bg-[#0c1324] text-gray-900 dark:text-[#c7d5ff] border'>
            {sumaCeruta}
          </span>
          <Input
            type='range'
            {...register("sumaCeruta", { valueAsNumber: true })}
            min={3000}
            max={25000}
            step={100}
            className='w-full '
          />
        </div>
        <p className='mt-1 text-sm text-red-500'>
          {errors.sumaCeruta?.message}
        </p>
      </div>
      <div>
        <Label htmlFor='durata' className='dark:text-[#c7d5ff]'>
          Durata (luni) <span className='text-red-500'>*</span>
        </Label>
        <Input
          type='number'
          min={6}
          max={60}
          step={6}
          {...register("durata", { valueAsNumber: true })}
          placeholder='6'
          id='durata'
          className='bg-white dark:bg-[#0c1324] text-gray-900 dark:text-[#c7d5ff] border border-gray-300 dark:border-[#243247]'
        />
        <p className='mt-1 text-sm text-red-500'>{errors.durata?.message}</p>
      </div>
    </>
  );
}

export default DetaliiCredit;
