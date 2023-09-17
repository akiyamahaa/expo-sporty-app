import { date, number, object, string } from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const signUpSchema = object({
  phone: string()
    // .length(10, "Số điện thoại không đúng")
    .matches(phoneRegExp, "Số điện thoại không đúng")
    .required(),
  password: string().min(8, "Mật khẩu phải tối thiểu 8 ký tự").required(),
  repassword: string().min(8, "Mật khẩu phải tối thiểu 8 ký tự").required(),
});

export const fillProfileSchema = object({
  fullname: string().required("Bạn phải điền đầy đủ tên"),
  gender: string(),
  weight: number(),
  height: number(),
  age: number(),
});

export const changePasswordSchema = object({
  password: string().min(8, "Mật khẩu phải tối thiểu 8 ký tự").required(),
  newPassword: string().min(8, "Mật khẩu phải tối thiểu 8 ký tự").required(),
  reNewPassword: string().min(8, "Mật khẩu phải tối thiểu 8 ký tự").required(),
});

export function onInputChange<FieldType>(
  field: keyof FieldType,
  setDataForm: any,
  dataForm: FieldType
) {
  return function (value: any) {
    setDataForm({
      ...dataForm,
      [field]: value,
    });
  };
}

export const convertDaytoName = (dayId: string) => {
  switch (dayId) {
    case "0":
      return "Chủ nhật";
    case "1":
      return "Thứ 2";
    case "2":
      return "Thứ 3";
    case "3":
      return "Thứ 4";
    case "4":
      return "Thứ 5";
    case "5":
      return "Thứ 6";
    case "6":
      return "Thứ 7";
    default:
      return "";
  }
};
