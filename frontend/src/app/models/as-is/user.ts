import {UserRole} from "./user-role";

export interface User {
  id: string;
  email: string;
  roles: UserRole[];
}
