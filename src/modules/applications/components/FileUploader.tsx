import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { documentsService } from "@/services/documentsService";
import { CheckCircle, FileText, Trash2 } from "lucide-react";
import { useEffect, useState, type ChangeEvent } from "react";
import type { UseFormWatch } from "react-hook-form";
import { type Inputs, type StepProps } from "../types";

type FileUploaderProps = StepProps & {
  name: "buletin" | "fluturasSalariu";
  labelText: string;
  watch: UseFormWatch<Inputs>;
};

function FileUploader({
  register,
  errors,
  name,
  labelText,
  watch,
}: FileUploaderProps) {
  const [file, setFile] = useState<File | null>(null);
  const [previewFile, setPreviewFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [progressMap, setProgressMap] = useState<Record<string, number>>({});
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);

  const { ref, onChange: rhfOnChange, ...rest } = register(name);
  const watchedValue = watch(name);
  const watchedFile =
    watchedValue instanceof File
      ? watchedValue
      : watchedValue instanceof FileList
      ? watchedValue[0]
      : undefined;

  useEffect(() => {
    if (watchedFile) {
      setFile(watchedFile);
      setPreviewFile(watchedFile);
    }
  }, [watchedFile]);

  useEffect(() => {
    if (!previewFile) {
      setPreviewUrl(null);
      return;
    }

    const url = URL.createObjectURL(previewFile);
    setPreviewUrl(url);

    return () => {
      URL.revokeObjectURL(url);
    };
  }, [previewFile]);

  const removeFile = () => {
    setFile(null);
  };

  const validateFile = (file: File) => {
    const allowedTypes = [
      "application/pdf",
      "image/jpeg",
      "image/jpg",
      "image/png",
    ];

    if (!allowedTypes.includes(file.type)) {
      alert("Format invalid. Acceptate: PDF, JPG, PNG");
      return false;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("Fișierul nu poate depăși 5MB.");
      return false;
    }

    return true;
  };

  const handleRealUpload = async (
    file: File,
    documentType: "idCard" | "incomeProof" | "other"
  ) => {
    const key = `${documentType}-${file.name}`;
    setIsUploading(true);
    setUploadError(null);

    try {
      const applicationId = `temp-${Date.now()}`;

      const progressInterval = setInterval(() => {
        setProgressMap((prev) => {
          const p = prev[key] || 0;
          return { ...prev, [key]: Math.min(p + Math.random() * 25, 90) };
        });
      }, 180);

      const response = await documentsService.uploadDocuments(
        [file],
        applicationId,
        documentType
      );

      clearInterval(progressInterval);

      if (response.success) {
        setProgressMap((prev) => ({ ...prev, [key]: 100 }));
      } else {
        throw new Error(response.message || "Eroare upload");
      }
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : "Eroare necunoscută";

      setUploadError(`Eroare la încărcarea ${file.name}: ${message}`);
      setProgressMap((prev) => ({ ...prev, [key]: 0 }));
    } finally {
      setIsUploading(false);
    }
  };

  const handleFileUpload = async (
    file: File,
    type: "buletin" | "fluturasSalariu"
  ) => {
    if (!validateFile(file)) return;

    const mappedType: "idCard" | "incomeProof" =
      type === "buletin" ? "idCard" : "incomeProof";
    await handleRealUpload(file, mappedType);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    rhfOnChange(e);
    if (e.target.files) {
      const file = e.target.files[0];
      setFile(file);
      setPreviewFile(file);
      handleFileUpload(file, name);
    }
  };

  const renderPreview = (file: File, remove: () => void, type: string) => {
    const isImage = file.type.startsWith("image/");

    const mappedType: "idCard" | "incomeProof" =
      type === "buletin" ? "idCard" : "incomeProof";

    const key = `${mappedType}-${file.name}`;
    const progress = progressMap[key] || 0;
    const url = isImage ? previewUrl : null;

    return (
      <div className='bg-blue-50 dark:bg-[#0c1324] border border-blue-100 dark:border-[#243247] rounded-md p-3 mt-2 transition'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            {isImage ? (
              <img
                src={url!}
                className='w-10 h-10 rounded-md object-cover border border-blue-200 dark:border-[#243247]'
              />
            ) : (
              <FileText
                className='text-blue-600 dark:text-blue-300'
                size={22}
              />
            )}

            <div>
              <p className='text-sm font-medium text-blue-800 dark:text-[#c7d5ff] max-w-[210px] truncate'>
                {file.name}
              </p>
              <p className='text-xs text-gray-500 dark:text-gray-400'>
                {(file.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>
          </div>

          {progress < 100 ? (
            <button onClick={remove} type='button' className='text-red-500'>
              <Trash2 size={16} />
            </button>
          ) : (
            <CheckCircle className='text-green-500' size={18} />
          )}
        </div>

        <div className='w-full bg-gray-200 dark:bg-[#1c2a3a] h-2 mt-2 rounded-full overflow-hidden'>
          <div
            style={{ width: `${progress}%` }}
            className={`h-2 rounded-full transition-all ${
              progress === 100 ? "bg-green-500" : "bg-green-400"
            }`}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <div className='grid items-center gap-1'>
      {uploadError && (
        <div className='bg-red-50 dark:bg-[#3b0f0f] border border-red-300 dark:border-red-700 text-red-700 dark:text-red-300 rounded-lg p-3'>
          {uploadError}
        </div>
      )}
      <Label
        htmlFor={name}
        className='cursor-pointer rounded-xl p-8
          border-2 border-dashed border-blue-300 dark:border-white/20
          bg-blue-50/20 dark:bg-[#2A3B55]/20
          hover:bg-blue-50/40 dark:hover:bg-[#2A3B55]/40
          flex flex-col gap-1 items-center justify-center
          transition-all'
      >
        <p className='font-medium text-blue-700 dark:text-blue-300'>
          Încarcă {labelText} <span className='text-red-500'>*</span>
        </p>
        <p className='text-sm text-gray-600 dark:text-gray-300 mt-1'>
          Acceptă PDF, JPG, PNG (max 5MB)
        </p>
      </Label>
      <p className='mt-1 text-sm text-red-500'>
        {errors[name]?.message as string}
      </p>
      <Input
        id={name}
        type='file'
        accept='application/pdf, image/png, image/jpeg'
        ref={ref}
        onChange={handleFileChange}
        className='hidden'
        disabled={isUploading}
        {...rest}
      />
      {file && previewFile && renderPreview(previewFile, removeFile, name)}
    </div>
  );
}

export default FileUploader;
