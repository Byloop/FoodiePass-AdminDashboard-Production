import { useState, useMemo } from 'react';
import { Button } from '../../component/atoms/Button';
import { CustomTable } from '../../component/organisms/CustomTable';
import { EmptyContainer } from '../../component/organisms/EmptyContainer';
import { attendence } from '../../assets/globals/data/Staff';
import { DateTimeQueryModal } from '../../component/organisms/DateTimeQueryModal';
import { useTranslation } from 'react-i18next';

function AttendenceList() {
  const { t } = useTranslation();
  const [selectedRange, setSelectedRange] = useState({
    startTime: '',
    endTime: '',
    stateDate: '',
    endDate: '',
    showModal: false,
  });

  const isTodaySelected = useMemo(
    () =>
      selectedRange.startDate?.toDateString?.() === new Date().toDateString(),
    [selectedRange.startDate]
  );

  const tomorrowDate = useMemo(() => {
    const nextDay = new Date();
    nextDay.setDate(nextDay.getDate() + 1);
    return nextDay;
  }, []);

  const isTomorrowSelected = useMemo(
    () =>
      selectedRange.startDate?.toDateString?.() === tomorrowDate.toDateString(),
    [selectedRange.startDate, tomorrowDate]
  );

  const columns = [
    {
      header: t('staffManagement.staffName'),
      cell: ({ row }) => {
        return (
          <div>
            <p>{row.original.staff.fullName}</p>
            <p className="font-sm text-blue">{row.original.staff.role}</p>
          </div>
        );
      },
    },
    {
      header: t('date'),
      accessorKey: 'date',
    },
    {
      header: t('status'),
      cell: ({ row }) => {
        const status = row.original.status;

        if (status == null) {
          return (
            <span className="flex justify-end">
              <div className="flex gap-x-4 max-w-[380px]">
                <Button
                  color="blue"
                  className="px-4"
                  size="small"
                  text={t('staffManagement.present')}
                />
                <Button
                  color="yellow"
                  className="px-4"
                  size="small"
                  text={t('staffManagement.absent')}
                />
                <Button
                  color="lightBlue"
                  className="px-4"
                  size="small"
                  text={t('staffManagement.halfShift')}
                />
              </div>
            </span>
          );
        }
        const formattedstatus = status
          .split('-')
          .map((string, index) => {
            if (index > 0) {
              return string.charAt(0).toUpperCase() + string.slice(1);
            }
            return string;
          })
          .join('');

        return (
          <div className="flex justify-end">
            <div className="w-[200px]">
              <Button
                color={
                  status === 'present'
                    ? 'blue'
                    : status === 'absent'
                      ? 'yellow'
                      : 'lightBlue'
                }
                className="px-4"
                size="small"
                text={t(`staffManagement.${formattedstatus}`)}
              />
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <>
      {selectedRange.showModal && (
        <DateTimeQueryModal
          showModal={selectedRange.showModal}
          onClickCancel={() =>
            setSelectedRange({
              ...selectedRange,
              showModal: false,
            })
          }
        />
      )}
      <div className="flex items-center my-6 justify-between">
        <div className="flex items-center gap-x-4">
          <h5 className="font-medium text-blue">
            {t('staffManagement.totalStaff')}
          </h5>
          <div className="px-6 py-2 bg-blue text-white rounded-full">80</div>
        </div>
        <div className="flex items-center gap-x-4">
          <Button
            className="px-4 font-semibold py-[10px] min-w-[100px]"
            text={t('today')}
            iconStyle="!w-[20px] !h-[20px]"
            size="base"
            color={isTodaySelected ? 'yellow' : 'grey'}
            onSubmit={() => {
              isTodaySelected
                ? setSelectedRange({
                    ...selectedRange,
                    startDate: '',
                  })
                : setSelectedRange({
                    ...selectedRange,
                    startDate: new Date(),
                  });
            }}
          />
          <Button
            className="px-4 font-semibold py-[10px]"
            text={t('tomorrow')}
            iconStyle="!w-[20px] !h-[20px]"
            size="base"
            color={isTomorrowSelected ? 'yellow' : 'grey'}
            onSubmit={() => {
              if (isTomorrowSelected) {
                setSelectedRange({
                  ...selectedRange,
                  startDate: '',
                });
              } else {
                setSelectedRange({
                  ...selectedRange,
                  startDate: tomorrowDate,
                });
              }
            }}
          />
          <Button
            className="px-4 font-semibold py-[10px]"
            text={t('7Days')}
            iconStyle="!w-[20px] !h-[20px]"
            size="base"
            color="grey"
          />
          <Button
            className="px-4 font-semibold py-[10px]"
            text={t('selectPeriod')}
            iconStyle="!w-[20px] !h-[20px]"
            size="base"
            onSubmit={() =>
              setSelectedRange({
                ...selectedRange,
                startDate: '',
                showModal: true,
              })
            }
            color={selectedRange.showModal ? 'yellow' : 'grey'}
          />
        </div>
      </div>
      {attendence.length > 0 ? (
        <CustomTable columns={columns} data={attendence} />
      ) : (
        <EmptyContainer className="!h-[300px]" buttonText="Add New Staff" />
      )}
    </>
  );
}

export default AttendenceList;
