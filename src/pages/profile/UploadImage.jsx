import { Camera } from '../../assets/globals/icons';
import { ImageFolderIcon } from '../../assets/globals/icons';

export function UploadImage({ selectedImage, onSelectImage, text, error }) {
  return (
    <div className="">
      <div className="w-[150px] bg-gray3 border border-opacity-20 h-[120px] flex items-center justify-center">
        {selectedImage ? (
          <img
            className="w-full h-full object-cover"
            src={selectedImage}
            alt="profile-pic"
          />
        ) : (
          <span>
            <ImageFolderIcon className="w-[60px] h-[60px] fill-gray4" />
          </span>
        )}
      </div>
      <button
        className="bg-blue mt-3 text-[14px] lg:text-base font-DMSans font-medium w-auto py-[5px] px-4 rounded-md flex items-center 
        justify-between text-white gap-x-3 relative"
      >
        <span>
          <Camera className="w-[22px] lg:w-[24px] h-[22px] lg:h-[24px] fill-white" />
        </span>
        <input
          type="file"
          className="absolute cursor-pointer top-0 left-0 w-full h-full opacity-0"
          onChange={(e) => onSelectImage(e)}
        />
        {text}
      </button>
      {error && <p className="error">{error}</p>}
    </div>
  );
}
