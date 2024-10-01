import { FastifyRequest, FastifyReply } from 'fastify';
import ListProjectsService from '../services/ListProjects.service';

export default class ListProjectsController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const ListProjects = new ListProjectsService();
    const projects = await ListProjects.execute();

    if (projects.length > 0) {
      reply.send(projects);
    } else {
      reply.status(404).send({ mensagem: 'Nenhum projeto encontrado' });
    }
  }
}
