import { ModalLayout } from './ModalLayout';
import { ExclamationIcon } from '../../assets/globals/icons';
import { Button } from '../atoms/Button';
import { useTranslation } from 'react-i18next';

export function PermissionModal({
  onClickCancel,
  showModal,
  onClickConfirm,
  title,
  subtitle,
  confirmButtonText,
}) {
  const { t } = useTranslation();

  return (
    <ModalLayout
      showModal={showModal}
      modalStyle="w-[400px] flex py-10 flex-col items-center overflow-hidden !rounded-xl pb-10"
    >
      <ExclamationIcon className="w-[100px] h-[100px] fill-blue" />
      <h6 className="mt-4 font-medium">{title}</h6>
      <small>{subtitle}</small>
      <div className="flex mt-6 items-center gap-x-6">
        <Button
          onSubmit={() => onClickCancel()}
          text={t('noCancel')}
          className="min-w-[160px]"
          size="small"
          color="lightBlue"
        />
        <Button
          onSubmit={onClickConfirm}
          text={confirmButtonText}
          className="px-4"
          size="small"
        />
      </div>
    </ModalLayout>
  );
}
