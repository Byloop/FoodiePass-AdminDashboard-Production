import { useState } from 'react';
import './auth.css';
import { Link } from 'react-router-dom';
import { Input } from '../../component/atoms/Input';
import { Swiper, SwiperSlide } from 'swiper/react';
import { carousalImages } from './Signup';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { LanguageDropdown } from '../../component/atoms/LanguageDropdown';
import { Button } from '../../component/atoms/Button';
import { PASSWORD_REGEX, EMAIL_REGEX } from '../../constants';
import { signin } from '../../api/authentication';

const initialValues = {
  email: '',
  password: '',
  rememberMeChecked: '',
};

const windowHeight = window.innerHeight;

function Signin() {
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
    await signin({
      email: values.email,
      password: values.password,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log('error', error);
      })
      .finally(() => setLoading(false));
  };

  const onValidate = (e) => {
    e.preventDefault();
    const newErrors = {};

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
      newErrors.password = `Password is invalid.
       Password must contain one uppercase character, one lowercase character, one numeric value, one special character`;
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      onSubmit();
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

      <div className="w-[44%] overflow-y-auto bg-gray1 h-full xl:w-[44%] pt-10 pb-10 2xl:w-[44%]">
        <div
          className={`flex flex-col overflow-y-auto bg-gray1 pt-10 pb-10 px-8 xl:px-0 
        items-center justify-center ${windowHeight > 763 ? 'h-full' : 'h-auto'}`}
        >
          <div className="w-[90%] xl:w-[70%] 2xl:w-[50%]">
            <div className="">
              <img src="logo/Logo.png" className="signup-logo" alt="" />
            </div>
            <div className="mt-4">
              <h1 className="text-3xl font-bold font-DMSans">Sign In</h1>
              <p className="mt-1 font-DMSans text-xl text-gray5">
                Please enter your details
              </p>
            </div>
            <LanguageDropdown className="mt-8" />

            {/* Signin form */}
            <div className="">
              <form onSubmit={onValidate} className="mt-4">
                <div className="flex flex-col lg:flex-row gap-x-[2%] w-full">
                  <Input
                    label="Email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={onChange}
                    className="w-full"
                    inputStyle="border-gray2 bg-transparent"
                    placeholder="Email"
                    error={errors.email}
                  />
                </div>

                <div className="flex flex-col lg:flex-row gap-x-[2%] w-full">
                  <Input
                    label="Password"
                    name="password"
                    type="password"
                    value={values.password}
                    onChange={onChange}
                    className="w-full mt-4"
                    inputStyle="border-gray2 bg-transparent"
                    placeholder="Password"
                    error={errors.password}
                  />
                </div>

                <div className="flex items-center justify-between w-full mt-3">
                  <div className="">
                    <div className="flex items-start gap-x-2">
                      <input
                        type="checkbox"
                        className="w-[18px] mt-[3px] h-[18px] rounded-sm border-3 border-black"
                        id="rememberMe"
                      />

                      <label
                        className="font-DMSans font-medium text-base text-gray5"
                        name="rememberMe"
                        htmlFor="rememberMe"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <div className="">
                    <p>
                      <Link
                        to=""
                        className="font-DMSans font-medium text-base text-blue"
                      >
                        Forgot Password?
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="mt-16">
                  <Button
                    text="Sign in"
                    type="submit"
                    color="blue"
                    size="base"
                    isLoading={isLoading}
                    className="w-full"
                  />
                </div>

                <div className="mt-4">
                  <p className="font-DMSans font-regular text-lg text-gray5 text-center">
                    Don’t have an account?{' '}
                    <Link
                      to="/signup"
                      className="text-[#004d9b] font-semibold font-DMSans"
                    >
                      Sign up
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

export default Signin;
