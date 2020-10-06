
// Based off response gotten from login
export class LoginDetails {
    expires_in: number;
    groups: "manager" | "chef" | "counter";
    id: number;
    token: string;
}

// Roles
interface Role {
  groups: "manager" | "chef" | "counter";
}
