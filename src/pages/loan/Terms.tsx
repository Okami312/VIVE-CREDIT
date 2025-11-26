interface TermsProps {
  acceptedTerms: boolean;
  setAcceptedTerms: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Terms({ acceptedTerms, setAcceptedTerms }: TermsProps) {
  return (
    <div className="flex items-start gap-3 bg-white p-4 rounded-lg border border-blue-50 shadow shadow-blue-50">
      <input
        type="checkbox"
        className="w-5 h-5 cursor-pointer"
        checked={acceptedTerms}
        onChange={(e) => setAcceptedTerms(e.target.checked)}
      />
      <p className="text-md font-semibold text-blue-700">
        Sunt de acord cu termenii și condițiile contractului de credit și
        confirm că am citit și înțeles toate clauzele acestuia.
      </p>
    </div>
  );
}
