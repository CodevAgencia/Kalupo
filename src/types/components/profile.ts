import {UserType} from "@/types/user";

export interface ProfileFormProps {
  user: UserType;
  theme?: 'default' | 'light' | 'dark';
}

export type OptionType = {
  img: string;
  value: string;
};

export interface PropsSelectImg {
  name: string;
  phone: string;
  indicative_phone: string;
  options: OptionType[];
  style: string;
  theme?: 'default' | 'light';
}

export interface ChangePasswordFormProps {
  id: string | number;
}

export interface FormValuesChangePassword {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}
