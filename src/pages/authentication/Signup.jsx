import { useState } from 'react';
import './auth.css';
import { Link } from 'react-router-dom';
import { Input } from '../../component/atoms/Input';
import { TextArea } from '../../component/atoms/Textarea';
import { ProfileImage } from '../../component/atoms/ProfileImage';
import CarousalImage1 from '../../assets/signup/carousal-1.png';
import CarousalImage2 from '../../assets/signup/carousal-2.png';
import CarousalImage3 from '../../assets/signup/carousal-3.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Button } from '../../component/atoms/Button';
import { LanguageDropdown } from '../../component/atoms/LanguageDropdown';
import { signup } from '../../api/authentication';
import {
  PASSWORD_REGEX,
  EMAIL_REGEX,
  PASSWORD_ERROR_MESSAGE,
} from '../../constants';

const initialValues = {
  name: '',
  email: '',
  password: '',
  passwordConfirm: '',
  address: '',
  details: '',
  termsChecked: false,
};

export const carousalImages = [
  { id: 1, image: CarousalImage1, alt: 'slide 1' },
  { id: 2, image: CarousalImage2, alt: 'slide 2' },
  { id: 3, image: CarousalImage3, alt: 'slide 3' },
];

function Signup() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isLoading, setLoading] = useState(false);

  const onChange = (e) => {
    setErrors({ ...errors, [e.target.name]: null });
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = async () => {
    setLoading(true);
    setErrors({});
    await signup({
      name: values.name,
      email: values.email,
      password: values.password,
    })
      .then((res) => {
        if (res.status && res.data) {
          console.log('success');
        } else {
          // setErrors({ message: 'Something went wrong. Please try again.' });
          console.log('error');
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  };

  const onValidate = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (values.name === '') {
      newErrors.name = 'Full Name is required.';
    }

    if (values.email === '') {
      newErrors.email = 'Email is required.';
    }

    if (!EMAIL_REGEX.test(values.email) && !newErrors?.email) {
      newErrors.email = 'Email is invalid.';
    }

    if (values.password === '') {
      newErrors.password = 'Password is required.';
    }

    if (!PASSWORD_REGEX.test(values.password) && !newErrors?.password) {
      newErrors.password = PASSWORD_ERROR_MESSAGE;
    }

    if (values.passwordConfirm === '') {
      newErrors.passwordConfirm = 'Confirm password is required.';
    }

    if (
      !PASSWORD_REGEX.test(values.passwordConfirm) &&
      !newErrors?.passwordConfirm
    ) {
      newErrors.passwordConfirm = PASSWORD_ERROR_MESSAGE;
    }

    if (
      values.password !== values.passwordConfirm &&
      !newErrors?.password &&
      !newErrors?.passwordConfirm
    ) {
      newErrors.passwordConfirm = 'Password do not match.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      if (!values.termsChecked) {
        setErrors({
          termsChecked:
            'You must accept the Terms and Conditions and Privacy Policy.',
        });
      } else {
        onSubmit();
      }
    }
  };

  return (
    <div className="flex overflow-hidden gap-x-[2%] h-screen w-full">
      <div className="w-[54%] xl:w-[54%] flex items-center justify-center h-screen 2xl:w-[54%]">
        <Swiper
          className="h-screen"
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          loop
          pagination
          modules={[Pagination, Autoplay]}
        >
          {carousalImages.map((item) => (
            <SwiperSlide
              key={item.id}
              className="flex items-center justify-end"
            >
              <div className="w-full xl:w-[85%] xl:h-full">
                <img
                  src={item.image}
                  className="w-full h-full object-cover"
                  alt={item.alt}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Form  */}
      <div className="w-[44%] overflow-y-auto bg-gray1 h-full xl:w-[44%] pt-10 pb-10 2xl:w-[44%]">
        <div className="flex flex-col h-fit bg-gray1 pt-10 pb-10 px-8 xl:px-0 items-center justify-center">
          <div className="w-[90%] xl:w-[70%] 2xl:w-[50%]">
            <div className="flex items-end justify-between">
              <img src="logo/Logo.png" className="signup-logo" alt="" />
            </div>

            <div className="mt-4">
              <h1 className="text-3xl font-bold font-DMSans">Sign Up</h1>
              <p className="mt-1 font-DMSans text-xl text-gray5">
                Please enter your basic details
              </p>
            </div>

            <LanguageDropdown className="mt-8" />

            <div className="mt-8">
              <ProfileImage />
            </div>

            {/* form */}
            <div className="">
              <form onSubmit={onValidate} className="mt-4">
                <Input
                  label="Full Name"
                  name="name"
                  type="text"
                  value={values.name}
                  onChange={onChange}
                  className="w-full"
                  inputStyle="border-gray2 bg-transparent"
                  placeholder="Full Name"
                  error={errors?.name}
                />
                <Input
                  label="Email"
                  value={values.email}
                  type="email"
                  name="email"
                  className="w-full mt-4"
                  onChange={onChange}
                  inputStyle="border-gray2 bg-transparent"
                  placeholder="Email"
                  error={errors.email}
                />

                <div className="flex flex-col xl:flex-row mt-4 gap-x-[2%] w-full">
                  <Input
                    label="Password"
                    name="password"
                    type="password"
                    value={values.password}
                    onChange={onChange}
                    className="w-full xl:w-[49%]"
                    inputStyle="border-gray2 bg-transparent"
                    placeholder="Password"
                    error={errors.password}
                  />
                  <Input
                    value={values.passwordConfirm}
                    name="passwordConfirm"
                    type="password"
                    label="Confirm Password"
                    onChange={onChange}
                    className="w-full xl:w-[49%] mt-4 xl:mt-0"
                    inputStyle="border-gray2 bg-transparent"
                    placeholder="Confirm Password"
                    error={errors.passwordConfirm}
                  />
                </div>

                {/* <Input
                  value={values.address}
                  onChange={onChange}
                  label="Address"
                  type="text"
                  name="address"
                  className="mt-4 w-full"
                  inputStyle="border-gray2 bg-transparent"
                  placeholder="Enter your address"
                /> */}

                {/* <TextArea
                  name="details"
                  label="Description"
                  value={values.details}
                  onChange={onChange}
                  placeholder="Leave a comment here"
                  className="mt-4 w-full"
                  textareaStyle="border-gray2 bg-transparent"
                /> */}

                <div className="mt-3 flex items-start gap-x-2">
                  <input
                    type="checkbox"
                    onChange={(e) => {
                      setErrors({ ...errors, termsChecked: null });
                      setValues({ ...values, termsChecked: e.target.checked });
                    }}
                    className="w-[18px] mt-[3px] h-[18px] rounded-sm border-3 border-black"
                    id="termsChecked"
                  />

                  <label
                    className="font-DMSans font-medium text-base text-gray5"
                    name="termsChecked"
                    htmlFor="termsChecked"
                  >
                    I agree to the{' '}
                    <span className="text-[#004d9b] font-DMSans font-medium">
                      Terms & Conditions
                    </span>{' '}
                    and the{' '}
                    <span className="text-[#004d9b] font-DMSans font-medium">
                      Privacy & Policy
                    </span>
                  </label>
                </div>
                {errors.termsChecked && (
                  <p className="error">{errors?.termsChecked}</p>
                )}
                {errors?.message && <p className="error">{errors?.message}</p>}

                <div className="mt-16">
                  <Button
                    text="Sign up"
                    type="submit"
                    color="blue"
                    size="base"
                    isLoading={isLoading}
                    className="w-full h-full"
                  />
                </div>
                <div className="mt-8 bg-transparent">
                  <p className="font-DMSans font-regular text-lg text-gray5 text-center">
                    Already have an account?{' '}
                    <Link
                      to="/signin"
                      className="text-[#004d9b] font-semibold font-DMSans"
                    >
                      Sign in
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
