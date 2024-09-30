export interface LoginForm {
    email: string,
    password: string
}

export interface Order {
    id: number,
    status: string,
    date: string
}

export interface RegisterForm {
    name: string,
    email: string,
    address: string,
    phone: string,
    password: string
    userId?: number
    orders?: Order[]
}

export interface IUserSession     {
    login: boolean,
    user: RegisterForm,
    token: string
  }

