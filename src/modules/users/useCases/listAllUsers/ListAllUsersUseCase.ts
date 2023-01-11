import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}
class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}
  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);
    if (!user) {
      throw new Error(`User not exist: ${user_id}`).name;
    }
    if (!user.admin) {
      throw new Error(`User ${user.email} not admin`).name;
    }
    const listAllUsers = this.usersRepository.list();
    return listAllUsers;
  }
}

export { ListAllUsersUseCase };
