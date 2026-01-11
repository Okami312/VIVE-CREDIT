import { Field, FieldContent, FieldLabel } from "@/components/ui/field";
import { Switch } from "@/components/ui/switch";
import { Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import { type StepPropsWithWatch } from "../types";

function Consimtamant({ errors, control }: StepPropsWithWatch) {
  return (
    <div className='flex flex-col gap-4'>
      <div>
        <Field orientation='horizontal'>
          <Controller
            name='benerificarReal'
            control={control}
            render={({ field }) => (
              <Switch
                id='benerificarReal'
                checked={field.value}
                onCheckedChange={field.onChange}
                className='data-[state=checked]:bg-blue-600 dark:data-[state=unchecked]:bg-blue-800 dark:data-[state=checked]:bg-blue-300'
              />
            )}
          />

          <FieldContent>
            <FieldLabel htmlFor='benerificarReal'>
              Sunt beneficiarul real al acestui împrumut.{" "}
              <span className='text-red-500'>*</span>
            </FieldLabel>
          </FieldContent>
        </Field>
        <p className='mt-1 text-sm text-red-500'>
          {errors.benerificarReal?.message}
        </p>
      </div>
      {/* termeni si conditii */}
      <div>
        <Field orientation='horizontal'>
          <Controller
            name='termeniSiConditii'
            control={control}
            render={({ field }) => (
              <Switch
                id='termeniSiConditii'
                checked={field.value}
                onCheckedChange={field.onChange}
                className='data-[state=checked]:bg-blue-600 dark:data-[state=unchecked]:bg-blue-800 dark:data-[state=checked]:bg-blue-300'
              />
            )}
          />
          <FieldContent>
            <FieldLabel htmlFor='termeniSiConditii' className='block'>
              Confirm că am citit, am înțeles și sunt de acord cu{" "}
              <Link
                to='/terms'
                target='_blank'
                className='text-blue-700 underline dark:text-blue-300'
              >
                Termenii şi condiţiile
              </Link>{" "}
              și{" "}
              <Link
                to='/privacy'
                target='_blank'
                className='text-blue-700 underline dark:text-blue-300'
              >
                Politica de confidențialitate
              </Link>{" "}
              . <span className='text-red-500'>*</span>
            </FieldLabel>
          </FieldContent>
        </Field>
        <p className='mt-1 text-sm text-red-500'>
          {errors.termeniSiConditii?.message}
        </p>
      </div>
      {/* end termeni si conditii */}
      <div>
        <Field orientation='horizontal'>
          <Controller
            name='oferte'
            control={control}
            render={({ field }) => (
              <Switch
                id='oferte'
                checked={field.value}
                onCheckedChange={field.onChange}
                className='data-[state=checked]:bg-blue-600 dark:data-[state=unchecked]:bg-blue-800 dark:data-[state=checked]:bg-blue-300'
              />
            )}
          />
          <FieldContent>
            <FieldLabel htmlFor='oferte' className='block'>
              Sunt de acord să primesc comunicări de marketing privind ofertele,
              promoțiile, produsele și serviciile Vive Credit IFN SRL, conform{" "}
              <Link
                to='/terms'
                target='_blank'
                className='text-blue-700 underline dark:text-blue-300'
              >
                Termenilor şi condiţiilor
              </Link>{" "}
              .
            </FieldLabel>
          </FieldContent>
        </Field>
      </div>
    </div>
  );
}

export default Consimtamant;
