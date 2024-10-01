import prismaClient from '../prisma';

export default class ListProjectsService {
  async execute() {
    const projects = await prismaClient.project.findMany();

    return projects;
  }
}
