import { Input } from "../Input/Input";
import { StyledLoginModal, ModalOverlay } from "./LoginModal.style";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { login } from '../../Store/Api/userSlice';

interface ILoginForm {
  useremail: string;
  userpassword: string;
}

// Валидация формы с использованием yup
const loginFormScheme = yup.object({
  useremail: yup
    .string()
    .required("Required field")
    .email("Enter your email correctly"),
  userpassword: yup
    .string()
    .required("Required field")
    .min(6, "Password must contain more than 6 characters"),
});

interface LoginModalProps {
  onClose: () => void;
  onLoginSuccess: (userData: { username: string; useremail: string }) => void;
}

export const LoginModal = ({ onClose, onLoginSuccess }: LoginModalProps) => {
  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<ILoginForm>({
    resolver: yupResolver(loginFormScheme),
  });

  const onLoginSubmit = (data: ILoginForm) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((user: { useremail: string }) => user.useremail === data.useremail);

    // Если пользователь не найден
    if (!user) {
      setError("useremail", { type: "manual", message: "This email is not registered" });
      return;
    }

    // Если пароль неверный
    if (user.userpassword !== data.userpassword) {
      setError("userpassword", { type: "manual", message: "Wrong password" });
      return;
    }

    // Сохраняем текущего пользователя в localStorage
    localStorage.setItem('currentUser', JSON.stringify(user));

    // Обновляем состояние в Redux (если используется Redux для глобального состояния)
    dispatch(login(user));

    // Вызываем onLoginSuccess для обновления состояния в родительском компоненте (Header)
    onLoginSuccess(user);

    // Закрываем модальное окно после успешного логина
    onClose();

    // Перезагружаем страницу после успешной авторизации
    window.location.reload();
  };

  return (
    <>
      <ModalOverlay onClick={onClose} />
      <StyledLoginModal>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(onLoginSubmit)}>
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
          <button type="submit">Login</button>
        </form>
      </StyledLoginModal>
    </>
  );
};
