import { Specification } from "../../model/Specifications";
import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from "../ISpecificationsRepository";

export class SpecificationRepository implements ISpecificationsRepository {
  private speficiations: Specification[];

  constructor() {
    this.speficiations = [];
  }

  create({ name, description }: ICreateSpecificationDTO): void {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });

    this.speficiations.push(specification);
  }

  list(): Specification[] {
    return this.speficiations;
  }

  findByName(name: string): Specification {
    const specification = this.speficiations.find(
      (speficiations) => speficiations.name === name
    );
    return specification;
  }
}
