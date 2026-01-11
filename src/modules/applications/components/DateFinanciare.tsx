import { type StepProps } from "../types";
import ApplicationFormField from "./ApplicationFormField";

function DateFinanciare({ register, errors }: StepProps) {
  return (
    <>
      <ApplicationFormField
        type='number'
        register={register}
        errors={errors}
        name='venitLunar'
        labelText='Venit lunar'
        placeholder='Ex. 7000'
      />

      <ApplicationFormField
        register={register}
        errors={errors}
        name='angajator'
        labelText='Angajator'
        placeholder='S.C. ANGAJATOR S.A.'
      />

      <ApplicationFormField
        register={register}
        errors={errors}
        name='ocupatie'
        labelText='Ocupatie'
        placeholder='Inginer'
      />

      <ApplicationFormField
        type='number'
        register={register}
        errors={errors}
        name='vechimeInMunca'
        labelText='Vechime In Munca'
        placeholder='10'
      />
    </>
  );
}

export default DateFinanciare;
