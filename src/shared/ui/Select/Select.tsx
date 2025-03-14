interface SelectProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
}

export function Select({
  id,
  label,
  value,
  onChange,
  options,
}: SelectProps) {
  return (
    <div className="flex gap-2.5 items-center">
      <label htmlFor={id} className="w-20">{label}:</label>
      <select
        id={id}
        className="w-full h-8 py-1 px-2.5 border-solid border outline-0 border-lime-50"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="" className="bg-black">All</option>
        {options.map((option) => (
          <option key={option.value} value={option.value} className="bg-black" >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
