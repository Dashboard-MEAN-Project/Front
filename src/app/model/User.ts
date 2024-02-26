export interface User {
  username: string;
  email: string;
  password: string;
  required: true;
  phone: string;
  gender: string;
  isActive: boolean;
  roles: string;
}
