import { useEffect, useState } from 'react';
import { SelectDateDropdown } from './SelectDateDropdown';
import TimelineBand from './TimelineBand';
import { employeeWiseShifting } from '../../assets/globals/data/Staff';
import GraphGrid from './GraphGrid';
import { useTranslation } from 'react-i18next';

function EmployeeWiseShifting() {
  const [areas, setAreas] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    setAreas(employeeWiseShifting);
  }, []);

  return (
    <div className="w-full mt-6 bg-white p-[20px]">
      <div className="flex items-center justify-between">
        <h6 className="font-semibold">15 Nov 2024</h6>
        <SelectDateDropdown />
      </div>
      <div className="mt-6 overflow-x-auto">
        <TimelineBand heading={t('staffManagement.employeeName')} />
        <div className="mt-10">
          {areas.map((area, index) => (
            <GraphGrid
              key={area.label}
              shifting={area}
              currentIndex={index}
              shiftings={areas}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default EmployeeWiseShifting;
