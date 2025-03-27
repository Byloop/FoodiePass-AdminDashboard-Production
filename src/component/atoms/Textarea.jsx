export function TextArea({
  value,
  name,
  label,
  onChange,
  className,
  placeholder,
  textareaStyle,
}) {
  return (
    <div className={`${className}`}>
      <label className="font-DMSans font-semibold text-sm" htmlFor="details">
        {label}
      </label>
      <textarea
        className={`w-full mt-1 block rounded-md border py-2 hover:outline-none hover:border-blue px-2 
          focus:outline-none focus:border-blue ${textareaStyle}`}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        id={name}
        value={value}
        rows={4}
      />
    </div>
  );
}
