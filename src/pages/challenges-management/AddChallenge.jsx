import { Form } from './Form';
import { ChevronDownIcon } from '../../assets/globals/icons';
import { useNavigate } from 'react-router-dom';

function AddChallenge() {
  const navigate = useNavigate();

  return (
    <div className="w-full pt-6 px-4 xlg:px-6">
      <div className="bg-transparent px-1 flex items-center gap-x-4 w-full">
        <span
          onClick={() => navigate(-1)}
          className="w-[35px] h-[35px] flex items-center justify-center rounded-full bg-blue bg-opacity-10"
        >
          <ChevronDownIcon className="w-[16px] h-[16px] fill-blue rotate-90 mr-[1px]" />
        </span>
        <h5 className="font-medium text-blue">Add Challenge</h5>
      </div>
      <Form />
    </div>
  );
}

export default AddChallenge;
