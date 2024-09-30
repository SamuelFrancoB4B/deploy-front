type iRoles = "user" | "admin";

export interface IUser {
    name: string;
    email: string;
    address: string;
    phone: string;
    role: iRoles;
    credentialId: number;
}