import { type StepPropsWithWatch } from "../types";
import FileUploader from "./FileUploader";

function Documente({ register, errors, watch }: StepPropsWithWatch) {
  return (
    <div className='flex flex-col gap-6'>
      <FileUploader
        register={register}
        errors={errors}
        watch={watch}
        name='buletin'
        labelText='Buletin'
      />
      <FileUploader
        register={register}
        errors={errors}
        watch={watch}
        name='fluturasSalariu'
        labelText='Fluturaș salariu'
      />
    </div>
  );
}

export default Documente;
