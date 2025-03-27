import ProfileImagePlaceholder from '../../assets/globals/profile-image-placeholder.png';
import { Camera } from '../../assets/globals/icons';

export function ProfileImage({ selectedImage, setImage }) {
  return (
    <div className="relative flex items-center justify-center bg-[#0f1c3f20] w-[100px] h-[100px] rounded-full">
      <img src={selectedImage ?? ProfileImagePlaceholder} alt="profile-img" />
      <input
        id="file-upload"
        type="file"
        className="opacity-0 absolute w-full h-full cursor-pointer rounded-full"
      />
      <div
        className="absolute cursor-pointer flex items-center justify-center -right-[10%] bottom-0 w-[40px] h-[40px] 
      rounded-full border-white border-4 bg-blue"
      >
        <Camera className="w-[20px] h-[20px] fill-white" />
        <input
          id="file-upload"
          type="file"
          className="opacity-0 absolute cursor-pointer rounded-full"
          onChange={setImage}
        />
      </div>
    </div>
  );
}
