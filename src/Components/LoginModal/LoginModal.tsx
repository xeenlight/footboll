import { Input } from "../Input/Input";
import { StyledLoginModal, ModalOverlay } from "./LoginModal.style"; 
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface ILoginForm {
  useremail: string;
  userpassword: string;
}

const loginFormScheme = yup.object({
  useremail: yup
    .string()
    .required("Обязательное поле")
    .email("Введите корректно свою почту"),
  userpassword: yup
    .string()
    .required("Обязательное поле")
    .min(6, "Пароль должен содержать более 6 цифр"),
});

interface LoginModalProps {
  onClose: () => void;
  onLoginSuccess: (userData: { username: string; useremail: string }) => void;
}

export const LoginModal = ({ onClose, onLoginSuccess }: LoginModalProps) => {
  const {
    control,
    handleSubmit,
    setError, // Используем для установки ошибок
    formState: { errors },
  } = useForm<ILoginForm>({
    resolver: yupResolver(loginFormScheme),
  });

  const onLoginSubmit = (data: ILoginForm) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(user => user.useremail === data.useremail);

    if (!user) {
      setError("useremail", { type: "manual", message: "Эта почта не зарегистрирована" });
      return; // Прерываем выполнение, если почта не найдена
    }

    if (user.userpassword !== data.userpassword) {
      setError("userpassword", { type: "manual", message: "Неверный пароль" });
      return; // Прерываем выполнение, если пароль неверный
    }

    // Сохраняем текущего пользователя
    localStorage.setItem('currentUser', JSON.stringify(user));
    onLoginSuccess(user); // Вызываем функцию для обновления состояния в родительском компоненте
    onClose(); // Закрываем модальное окно
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

          <button type="submit">Login</button>
        </form>
      </StyledLoginModal>
    </>
  );
};
