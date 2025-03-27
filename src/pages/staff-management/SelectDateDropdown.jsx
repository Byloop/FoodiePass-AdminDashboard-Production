import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {
  PopoverBody,
  PopoverContent,
  PopoverRoot,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '../../component/atoms/Button';
import { useTranslation } from 'react-i18next';

export function SelectDateDropdown() {
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  return (
    <PopoverRoot>
      <PopoverTrigger>
        <Button
          className="px-4"
          size="small"
          text={t('staffManagement.selectDate')}
          color="lightBlue"
        />
      </PopoverTrigger>
      <PopoverContent className="bg-white rounded-[10px]">
        <PopoverBody className="!p-[2px] bg-white !rounded-[10px]">
          <Calendar locale={i18n.language} />
        </PopoverBody>
      </PopoverContent>
    </PopoverRoot>
  );
}
