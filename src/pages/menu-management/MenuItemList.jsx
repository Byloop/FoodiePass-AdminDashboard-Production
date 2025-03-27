import { useEffect, useState } from 'react';
import { CancelCircleIcon } from '../../assets/globals/icons';
import { SearchInput } from '../../component/atoms/SearchInput';
import { Button } from '../../component/atoms/Button';
import { AddIcon } from '../../assets/globals/icons';
import { useNavigate } from 'react-router-dom';
import { MenuItems } from '../../assets/globals/data/MenuItems';
import { DeleteIcon, EditIcon, DisableIcon } from '../../assets/globals/icons';
import { EmptyContainer } from '../../component/organisms/EmptyContainer';
import { useTranslation } from 'react-i18next';

const icons = {
  addIcon: AddIcon,
};

export function MenuItemList({ category, onClickCancel }) {
  const [menuItems, setMenuItems] = useState([]);
  const { name, id } = category;
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    const fetchedMenuItems = MenuItems.filter((item) => item.categoryId === id);
    setMenuItems(fetchedMenuItems);
  }, [id]);

  const editMenu = (menuItem) => {
    console.log(menuItem);
    navigate(`${name}/edit-menu-item`, {
      state: {
        menuItem: menuItem,
        category: category,
      },
    });
  };

  const deleteMenu = (menuId) => {
    console.log('delete menu', menuId);
  };

  const disableMenu = (menuId) => {
    console.log('disable menu', menuId);
  };

  return (
    <div className="overflow-y-auto h-full">
      <div className="flex items-center justify-between px-4">
        <h5 className="font-semibold text-blue">{name}</h5>
        <span className="cursor-pointer" onClick={onClickCancel}>
          <CancelCircleIcon className="w-[30px] xl:w-[34px] h-[30px] xl:h-[34px] fill-black" />
        </span>
      </div>
      <div className="w-full h-[1px] bg-black bg-opacity-30 mt-4" />
      <div className="flex mt-4 items-center gap-x-6 justify-between px-4">
        <SearchInput
          onSearch={(searchKey) => console.log('search key', searchKey)}
          className="!rounded-full !py-[6px] flex-1"
          iconStyle="!w-[16px] !h-[16px]"
          focusStyle="!border-blue !border-opacity-100"
        />
        <Button
          text={t('menuManagement.addMenuItem')}
          icon={icons.addIcon}
          size="small"
          color="yellow"
          className="px-4 !py-[6px]"
          onSubmit={() =>
            navigate(`${name}/add-menu-item`, {
              state: {
                category,
              },
            })
          }
        />
      </div>
      {menuItems.length === 0 ? (
        <EmptyContainer className="h-[60%]" buttonText="Add Menu Item" />
      ) : (
        <div className="flex mt-6 gap-x-4 gap-y-6 flex-row flex-wrap px-4">
          {menuItems.map((item) => (
            <div
              className="w-[180px] xl:w-[230px] h-[280px] xl:h-[340px] rounded-lg relative"
              key={item.id}
            >
              <div className="h-[86%]">
                {item.video ? (
                  <video
                    controls
                    className="w-full object-cover h-full rounded-lg"
                  >
                    <source src={item.video} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    className="w-full h-full rounded-lg object-cover"
                    src={item.image}
                    alt={item.name}
                  />
                )}
              </div>
              <h5 className="text-blue text-center font-medium mt-2 text-xl xl:text-2xl">
                {item.name}
              </h5>
              <div className="absolute flex flex-col gap-y-2 bg-transparent top-2 right-1 xl:right-2">
                <span
                  onClick={() => editMenu(item)}
                  className="bg-black cursor-pointer flex items-center justify-center rounded-full 
                w-[30px] xl:w-[35px] h-[30px] xl:h-[35px] bg-opacity-50"
                >
                  <EditIcon className="w-[15px] xl:w-[18px] h-[15px] xl:h-[18px] fill-white" />
                </span>
                <span
                  onClick={() => deleteMenu(item.id)}
                  className="bg-black cursor-pointer flex items-center justify-center rounded-full 
                w-[30px] xl:w-[35px] h-[30px] xl:h-[35px] bg-opacity-50"
                >
                  <DeleteIcon className="w-[18px] xl:w-[20px] h-[18px] xl:h-[20px] fill-white" />
                </span>
                <span
                  onClick={() => disableMenu(item.id)}
                  className="bg-black cursor-pointer flex items-center justify-center rounded-full
                w-[30px] xl:w-[35px] h-[30px] xl:h-[35px] bg-opacity-50"
                >
                  <DisableIcon className="w-[16px] xl:w-[20px] h-[16px] xl:h-[20px] fill-white" />
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
