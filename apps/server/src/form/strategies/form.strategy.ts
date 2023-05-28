interface FormStrategy {
  formatFormStructure(formType: string): void; //FormEntity
}

export class GetFormStructure {
  protected formStrategy;

  constructor(formStrategy: FormStrategy) {
    this.formStrategy = formStrategy;
  }

  getStructure(formType: string) {
    return this.formStrategy.formatFormStructure(formType);
  }
}
