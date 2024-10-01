import IProject from '../interfaces/Project.interface';

export default class CreateProjectValidator {
  private isStringValid(value: string) {
    if (value !== 'undefined' && value !== null && isNaN(Number(value))) {
      return true;
    } else {
      return false;
    }
  }

  private checkURL(value: string) {
    try {
      let url = new URL(value);
      return true;
    } catch (error) {
      return false;
    }
  }

  private isNumber(value: number) {
    return !isNaN(value);
  }

  validate(dataCreateProject: IProject) {
    if (
      this.isStringValid(dataCreateProject.title) &&
      this.checkURL(dataCreateProject.onlineProjectURL) &&
      this.checkURL(dataCreateProject.repositoryProjectURL) &&
      this.checkURL(dataCreateProject.imageProjectURL) &&
      this.isNumber(dataCreateProject.id) &&
      this.isNumber(dataCreateProject.imageWidth) &&
      this.isNumber(dataCreateProject.imageHeight)
    ) {
      return true;
    } else {
      return false;
    }
  }
}
