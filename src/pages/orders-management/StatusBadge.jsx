import { useTranslation } from 'react-i18next';

export function StatusBadge({ status }) {
  const { t } = useTranslation();

  return (
    <div
      className={`${status === 'pending' ? 'bg-gray-200' : status === 'completed' ? 'bg-yellow' : 'bg-red-500'} rounded-full px-3 py-2`}
    >
      <p
        className={`font-DMSans text-[13px] ${status === 'cancelled' ? 'text-white' : 'text-black'}`}
      >
        {t(status)}
      </p>
    </div>
  );
}
