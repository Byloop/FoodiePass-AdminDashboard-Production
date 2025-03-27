import { Button } from '../atoms/Button';
import {
  ImageFolderIcon,
  Camera,
  ChevronDownIcon,
} from '../../assets/globals/icons';
import { useNavigate } from 'react-router-dom';
import { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';

const icons = {
  camera: Camera,
};

export const LayoutWithImageUpload = forwardRef((props, fileInputRef) => {
  const {
    selectedImage,
    onSelectImage,
    heading,
    leftContainerStyle,
    rightContainerStyle,
    imageContainerStyle,
    imageStyle,
  } = props;
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <>
      <div className="bg-transparent px-1 flex items-center mt-6 gap-x-4 w-full">
        <span
          onClick={() => navigate(-1)}
          className="w-[35px] h-[35px] flex items-center justify-center rounded-full bg-blue bg-opacity-10"
        >
          <ChevronDownIcon className="w-[16px] h-[16px] fill-blue rotate-90 mr-[1px]" />
        </span>
        <h5 className="font-medium text-blue">{heading}</h5>
      </div>
      <div
        className="flex flex-row items-stretch
      2xl:max-w-[1336px] gap-x-[1%] mt-6"
      >
        <div
          className={`py-10 px-4 lg:px-8 rounded-2xl
            border border-black border-opacity-10 bg-white ${leftContainerStyle}`}
        >
          {props.children}
        </div>
        <div
          className={`h-full rounded-2xl bg-white px-4 py-6
            border border-black border-opacity-10 ${rightContainerStyle}`}
        >
          <div
            className={`w-full ${selectedImage ? 'bg-blue bg-opacity-10' : 'bg-gray3 bg-opacity-100'} 
              border border-opacity-20 h-[250px] 2xl:h-[280px] rounded-2xl flex items-center justify-center ${imageContainerStyle}`}
          >
            {selectedImage ? (
              <img
                className={`w-[70%] h-full object-contain ${imageStyle}`}
                src={selectedImage}
                alt="profile-pic"
              />
            ) : (
              <span>
                <ImageFolderIcon className="w-[60px] h-[60px] fill-gray4" />
              </span>
            )}
          </div>
          <div className="relative">
            <Button
              text={t('upload')}
              className="w-full mt-8"
              color="lightBlue"
              icon={icons.camera}
              iconStyle="w-[26px] h-[26px]"
              size="base"
            />
            <input
              type="file"
              ref={fileInputRef}
              className="absolute cursor-pointer top-0 left-0 w-full h-full opacity-0"
              onChange={(e) => onSelectImage(e.target.files[0])}
            />
          </div>
        </div>
      </div>
    </>
  );
});

LayoutWithImageUpload.displayName = 'LayoutWithImageUpload';
