import prismaClient from '../prisma';
import IProject from '../interfaces/Project.interface';

export default class CreateProjectService {
  async validateId(id: number) {
    const existingId = await prismaClient.project.findUnique({
      where: {
        id: id,
      },
    });

    return existingId;
  }

  async execute(dataCreateProject: IProject) {
    const existingId = await this.validateId(dataCreateProject.id);

    if (!existingId) {
      await prismaClient.project.create({
        data: {
          id: dataCreateProject.id,
          title: dataCreateProject.title,
          onlineProjectURL: dataCreateProject.onlineProjectURL,
          repositoryProjectURL: dataCreateProject.repositoryProjectURL,
          imageProjectURL: dataCreateProject.imageProjectURL,
          imageWidth: dataCreateProject.imageWidth,
          imageHeight: dataCreateProject.imageHeight,
        },
      });
      return { mensagem: 'Criado com sucesso' };
    } else {
      return { mensagem: 'Id já existente' };
    }
  }
}
