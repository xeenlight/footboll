import { Input } from "../Input/Input";
import { StyledRegisterModal, ModalOverlay } from "./RegisterModal.style"; 
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { register } from '../../Store/Api/userSlice';

interface IRegisterForm {
  username: string; 
  useremail: string;
  userpassword: string;
}

const RegisterFormScheme = (existingUsers: any[]) => yup.object({
  username: yup
    .string()
    .required("Required field")
    .min(1, "Enter your Name"),
  useremail: yup
    .string()
    .required("Required field")
    .email("Enter your email correctly")
    .test('unique', 'A user with this email address is already registered', (value) => {
      return !existingUsers.some(user => user.useremail === value);
    }),
  userpassword: yup
    .string()
    .required("Required field")
    .min(6, "Password must contain more than 6 characters"),
});

interface RegisterModalProps {
  onClose: () => void;
  onRegisterSuccess: (data: IRegisterForm) => void;
}

export const RegisterModal = ({ onClose, onRegisterSuccess }: RegisterModalProps) => {
  const dispatch = useDispatch();
  const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterForm>({
    resolver: yupResolver(RegisterFormScheme(existingUsers)),
  });

  const onRegisterSubmit = (data: IRegisterForm) => {
    dispatch(register(data));
    onRegisterSuccess(data);
    onClose();
    window.location.reload();  
  };
  

  return (
    <>
      <ModalOverlay onClick={onClose} />
      <StyledRegisterModal>
        <h1>Register</h1> 
        <form onSubmit={handleSubmit(onRegisterSubmit)}>
          <Controller
            name="username"
            control={control}
            render={({ field }) => (
              <Input
                type="text"
                placeholder="Your Name"
                errorText={errors.username?.message}
                isError={!!errors.username}
                {...field}
              />
            )}
          />
          <Controller
            name="useremail"
            control={control}
            render={({ field }) => (
              <Input
                type="email"
                placeholder="Your mail"
                errorText={errors.useremail?.message}
                isError={!!errors.useremail}
                {...field}
              />
            )}
          />
          <Controller
            name="userpassword"
            control={control}
            render={({ field }) => (
              <Input
                type="password"
                placeholder="Password"
                errorText={errors.userpassword?.message}
                isError={!!errors.userpassword}
                {...field}
              />
            )}
          />
          <button type="submit">Register</button>
        </form>
      </StyledRegisterModal>
    </>
  );
};
