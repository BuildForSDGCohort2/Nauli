export interface IUser {
    id: number;
    password: string;
    phone: string;
    email: string;
    name: string;
    role: string;
    saccoId?: string;
    sacco?: string;
}

export interface UserLogin {
    password: string;
    phone: string;
}

export interface UserRegister {
    password: string;
    phone: string;
    name: string;
}