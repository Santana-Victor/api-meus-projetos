import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import CreateProjectController from '../controllers/CreateProject.controller';
import ListProjectsController from '../controllers/ListProjects.controller';

export default async function routes(fastify: FastifyInstance) {
  fastify.get(
    '/projects',
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new ListProjectsController().handle(request, reply);
    }
  );

  fastify.post(
    '/project',
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new CreateProjectController().handle(request, reply);
    }
  );
}
