export class CreateUserDto {
  name: string;
  email: string;
  password: string;
  cpf: string | null;
  isAdmin: boolean;
}