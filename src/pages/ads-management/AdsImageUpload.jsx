import { useState } from 'react';
import { CancelCircleIcon, AddIcon } from '../../assets/globals/icons';
import { Button } from '../../component/atoms/Button';

export function AdsImageUploadModal({
  onClickCancel,
  selectedImage,
  onClickNext,
}) {
  const [file, setFile] = useState(null);
  const [previewURL, setPreviewUrl] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(event.target.files[0]);
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreviewUrl(reader.result);
    };
    reader.readAsDataURL(selectedFile);
  };

  return (
    <>
      <div className="py-5 px-3 flex items-center justify-between">
        <h6 className="text-blue font-medium">Add Ads</h6>
        <span className="cursor-pointer" onClick={() => onClickCancel()}>
          <CancelCircleIcon className="w-[26px] h-[26px] fill-blue" />
        </span>
      </div>
      <span className="text-black text-opacity-50 px-3 block">
        Please upload Png, Jpg (367 x 137 ) in image and make sure the file size
        is under 5 MB. Choose a file or drag it here File
      </span>
      {previewURL || selectedImage ? (
        <>
          <div className="h-[200px] mt-6 max-w-lg mx-auto relative">
            {previewURL && (
              <span
                className="absolute cursor-pointer bg-black bg-opacity-70 rounded-full block -top-2 -right-2"
                onClick={() => setPreviewUrl(null)}
              >
                <CancelCircleIcon className="w-[26px] h-[26px] fill-white" />
              </span>
            )}
            <img
              src={previewURL ?? selectedImage}
              alt=""
              className="w-full h-[200px]"
            />
          </div>
          {selectedImage && (
            <div className="px-3 mt-3">
              <label
                htmlFor="fileInput"
                className="text-blue-600 bg-yellow rounded-full py-2 px-4 mt-2 cursor-pointer"
              >
                Choose New File
              </label>
              <input
                id="fileInput"
                type="file"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>
          )}
        </>
      ) : (
        <div
          className="w-full mt-6 max-w-lg mx-auto border-2 border-dashed border-blue rounded-lg 
      bg-lightBlue p-6 flex flex-col items-center justify-center"
        >
          <div className="w-12 h-12 flex items-center justify-center bg-blue-600 rounded-full">
            <span className="text-white p-3 bg-blue rounded-full block text-2xl">
              <AddIcon className="w-[20px] h-[20px] fill-white" />
            </span>
          </div>
          <label
            htmlFor="fileInput"
            className="text-blue-600 mt-2 cursor-pointer"
          >
            Choose file here
          </label>
          <input
            id="fileInput"
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />
        </div>
      )}
      <div className="flex items-center justify-center mt-8">
        <Button
          onSubmit={onClickNext}
          isDisabled={!previewURL && !selectedImage}
          text="Next"
          className="px-6"
          size="small"
        />
      </div>
    </>
  );
}
