import { FastifyRequest, FastifyReply } from 'fastify';
import CreateProjectService from '../services/CreateProject.service';
import IProject from '../interfaces/Project.interface';
import CreateProjectValidator from '../validators/CreateProject.validator';

export default class CreateProjectController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const {
      id,
      title,
      onlineProjectURL,
      repositoryProjectURL,
      imageProjectURL,
      imageWidth,
      imageHeight,
    } = request.body as IProject;

    const dataCreateProject: IProject = {
      id,
      title,
      onlineProjectURL,
      repositoryProjectURL,
      imageProjectURL,
      imageWidth,
      imageHeight,
    };

    const isValid = new CreateProjectValidator().validate(dataCreateProject);

    if (isValid) {
      const createProject = new CreateProjectService();
      const mensagem = await createProject.execute(dataCreateProject);

      reply.status(201).send(mensagem);
    } else {
      reply.status(400).send({ messagem: 'Parâmetro inválido' });
    }
  }
}
