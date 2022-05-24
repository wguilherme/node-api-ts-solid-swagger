import { CategoriesRespository } from "../repositories/CategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

export class CreateCateogryService {
  execute({ name, description }: IRequest) {
    const categoriesRepository = new CategoriesRespository();
    const categoryAlreadyExists = categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error("Category already exists");
    }

    categoriesRepository.create({ name, description });
  }
}
