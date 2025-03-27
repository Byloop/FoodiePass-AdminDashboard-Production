import { useTranslation } from 'react-i18next';

export function Input(props) {
  const { t } = useTranslation();

  const {
    value,
    name,
    label,
    type,
    onChange,
    className,
    placeholder,
    inputStyle,
    error,
    isDisabled,
  } = props;

  return (
    <div className={`${className}`}>
      <label
        htmlFor={name}
        className="font-DMSans font-semibold text-sm text-black"
      >
        {label}
      </label>
      <input
        type={type}
        className={`w-full mt-1 block text-base font-DMSans font-medium py-2 rounded-md read-only:border-opacity-20
          read-only:hover:border-black read-only:hover:border-opacity-20
          border hover:outline-none hover:border-blue px-2 
          focus:outline-none focus:border-blue ${inputStyle}`}
        onChange={onChange}
        id={name}
        placeholder={placeholder}
        value={value}
        name={name}
        readOnly={isDisabled}
      />
      {error && <p className="error">{t(error)}</p>}
    </div>
  );
}
