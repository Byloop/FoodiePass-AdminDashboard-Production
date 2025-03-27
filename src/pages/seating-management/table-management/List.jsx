import { useState, useMemo } from 'react';
import { TableLayout } from './TableLayout';
import { DropDownInput } from '../../../component/atoms/DropDownInput';
import { Levels } from '../../../assets/globals/data/levelData';
import {
  tables as storedTables,
  levelAddons,
  addons as storedAddons,
} from '../../../assets/globals/data/tableData';
import { Link } from '../../../component/atoms/Link';
import { AddIcon } from '../../../assets/globals/icons';
import { Switch } from '../../../component/atoms/Switch';
import { DeleteIcon, InfoIcon } from '../../../assets/globals/icons';
import { useTranslation } from 'react-i18next';

const icons = {
  addIcon: AddIcon,
};

export function TableList() {
  const [selectedArea, setSelectedArea] = useState(null);
  const { t } = useTranslation();

  const tables = useMemo(() => {
    if (selectedArea) {
      return storedTables.filter((table) => table.levelId === selectedArea.id);
    }
    return [];
  }, [selectedArea]);

  const addons = useMemo(() => {
    if (selectedArea) {
      return levelAddons
        .filter((levelAddon) => levelAddon.levelId === selectedArea.id)
        .map((item) => storedAddons.find((addon) => addon.id === item.addonId));
    }
    return [];
  }, [selectedArea]);

  return (
    <div className="">
      <h5 className="font-medium text-blue mt-6">
        {t('tableManagement.tableManagement')}
      </h5>
      <div className="flex flex-col-reverse lg:flex-row items-start mt-6 gap-x-[1%] gap-y-6 2xl:max-w-[1336px]">
        <div className="w-full lg:w-[440px] py-4 px-4 bg-white border border-black rounded-2xl border-opacity-10">
          <DropDownInput
            buttonStyle="!py-[7px]"
            label={t('levelManagement.location')}
            placeholder={t('tableManagement.selectArea')}
            options={Levels}
            selectedItem={selectedArea}
            onSelectItem={(item) => setSelectedArea(item)}
          />
          <TableLayout
            className="mt-6 !w-full !h-[400px] lg:!h-[500px] lg:!w-[400px]"
            tables={tables}
            addons={addons}
          />
        </div>
        <div className="w-full lg:w-[69%] pt-4 bg-white border border-black rounded-2xl border-opacity-10">
          <div className="flex px-4 items-center justify-between">
            <div className="flex items-center gap-x-2">
              <h6 className="font-medium">
                {t('tableManagement.totalTables')}
              </h6>
              {tables.length ? (
                <span className="block bg-blue text-white rounded-full px-4 py-1">
                  {tables.length}
                </span>
              ) : null}
            </div>
            <Link
              text={t('tableManagement.manageTables')}
              icon={icons.addIcon}
              navigateTo="add-table"
              className="px-4"
              size="small"
              color="yellow"
            />
          </div>
          <div className="w-full h-[1px] bg-black mt-4 bg-opacity-20" />
          {tables.length > 0 ? (
            <Table tables={tables} />
          ) : (
            <div className="flex px-12 flex-col items-center justify-center h-[500px]">
              <span className="bg-blue flex items-center justify-center w-[80px] h-[80px] rounded-full">
                <InfoIcon className="w-[38px] h-[38px] fill-white" />
              </span>
              <h6 className="font-medium mt-4 text-center">
                {t('tableManagement.emptyListMessage')}
              </h6>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const Table = ({ tables }) => {
  const { t } = useTranslation();

  return (
    <div className="">
      <table className="w-full ">
        <tr className="py-2 border-b border-black border-opacity-20">
          <th className="text-center py-4 font-semibold font-DMSans text-base text-blue">
            {t('tableManagement.tableNo')}
          </th>
          <th className="font-semibold font-DMSans text-base text-blue">
            {t('tableManagement.maxCapacity')}
          </th>
          <th className="font-semibold px-2 font-DMSans text-base text-blue">
            {t('tableManagement.bookingPrice')}
          </th>
          <th className="font-semibold px-1 font-DMSans text-base text-blue">
            {t('tableManagement.availability')}
          </th>
          <th className="font-semibold px-2 font-DMSans text-base text-blue">
            {t('action')}
          </th>
        </tr>

        {tables.map((table, index) => (
          <tr
            className={` border-black border-opacity-20 ${index === tables.length - 1 ? '' : 'border-b'}`}
            key={table.id}
          >
            <td className="py-4 font-DMSans font-medium text-small text-center">
              {table.id}
            </td>
            <td className="font-DMSans py-4 font-medium text-small text-center">
              {table.maximumPax}
            </td>
            <td className="text-center font-DMSans font-medium text-small">
              {`$${table.price}`}
            </td>
            <td className="text-center flex items-center justify-center py-[14px]">
              <Switch
                className="!w-[50px] !h-[26px]"
                isActive={table.isAvailable}
                toggleStyle={`!w-[20px] !h-[20px] ${table.isAvailable ? '!translate-x-[120%]' : '!translate-x-[3px]'}`}
              />
            </td>
            <td className="">
              <span className="w-full flex items-center justify-center cursor-pointer">
                <DeleteIcon className="w-[26px] h-[26px] fill-black" />
              </span>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};
