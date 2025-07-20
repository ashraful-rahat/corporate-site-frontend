export interface User {
  _id: string;
  username: string;
  email?: string;
  role?: string;
  isActive?: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CreateUserRequest {
  username: string;
  password: string;
}

export interface UpdateUserRequest {
  username?: string;
  password?: string;
  email?: string;
  role?: string;
  isActive?: boolean;
}

export interface UserResponse {
  success: boolean;
  message: string;
  data: User;
}

export interface UsersResponse {
  success: boolean;
  message: string;
  data: User[];
  meta?: {
    page: number;
    limit: number;
    total: number;
    totalPage: number;
  };
} 