export interface User {
  id:string;
  username: string;
  email: string;
  password: string;
  required: true;
  phone: string;
  gender: string;
  isActive: boolean;
  roles: string;
}
