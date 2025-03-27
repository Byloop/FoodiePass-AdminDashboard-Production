import { useTranslation } from 'react-i18next';

export function AmountInput({ price, onSetPrice, className, error }) {
  const { t } = useTranslation();
  return (
    <div className={className}>
      <label className="font-DMSans font-semibold text-base text-black">
        {t('price')}
      </label>
      <div
        className="border flex gap-x-1 items-center justify-center mt-2 border-black border-opacity-20 
             w-[110px] h-[110px] xl:w-[120px] xl:h-[120px]
            xlg:w-[150px] 2xl:w-[160px] 2xl:h-[120px] xlg:h-[130px] rounded-lg"
      >
        <input
          placeholder="$1000"
          value={price?.length > 1 ? price : ''}
          className="border-none outline-none text-[28px] xl:text-[30px] xlg:text-[36px] h-full w-[90%] text-center"
          onChange={(e) => {
            let value = e.target.value;

            // Remove any existing dollar signs and non-numeric characters (except for decimal)
            value = value.replace(/[^0-9.]/g, '');
            onSetPrice(`$${value}`);
          }}
        />
      </div>
      {error && <p className="error">{error}</p>}
    </div>
  );
}
