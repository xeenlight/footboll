import { Input } from "../Input/Input";
import { StyledRegisterModal, ModalOverlay } from "./RegisterModal.style"; 
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface IRegisterForm {
  username: string; 
  useremail: string;
  userpassword: string;
}

// Функция для создания схемы валидации
const RegisterFormScheme = (existingUsers) => yup.object({
  username: yup
    .string()
    .required("Обязательное поле")
    .min(1, "Введите своё Имя"),
  useremail: yup
    .string()
    .required("Обязательное поле")
    .email("Введите корректно свою почту")
    .test('unique', 'Пользователь с таким email уже зарегистрирован', (value) => {
      return !existingUsers.some(user => user.useremail === value);
    }),
  userpassword: yup
    .string()
    .required("Обязательное поле")
    .min(6, "Пароль должен содержать более 6 цифр"),
});

interface RegisterModalProps {
  onClose: () => void;
  onRegisterSuccess: (data: IRegisterForm) => void;
}

export const RegisterModal = ({ onClose, onRegisterSuccess }: RegisterModalProps) => {
  const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterForm>({
    resolver: yupResolver(RegisterFormScheme(existingUsers)),
  });

  const onRegisterSubmit = (data: IRegisterForm) => {
    // Добавляем нового пользователя в массив
    existingUsers.push(data);
    localStorage.setItem('users', JSON.stringify(existingUsers));

    console.log(existingUsers);
    onRegisterSuccess(data); // Передаем данные о новом пользователе
    onClose();
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
                placeholder="Ваше Имя"
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
                placeholder="Ваша почта"
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
                placeholder="Пароль"
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
