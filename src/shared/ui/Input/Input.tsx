interface InputProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
}

export function Input({ id, label, value, onChange }: InputProps) {
  return (
    <div className="flex gap-2.5 items-center">
      <label htmlFor={id} className="w-20">{label}:</label>
      <input
        type="text"
        id={id}
        className="w-full h-8 py-1 px-2.5 border-solid border outline-0 border-lime-50"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
