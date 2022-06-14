import { RouteInMemoryRepository } from "../infra/db/route-in-memory-repository";
import { CreateRouteUseCase } from "./create-route.use-case";


describe('Create Route Use Case Tests', () => {
    it('should create a new route', async () => {
        const repository = new RouteInMemoryRepository();
        const createUseCase = new CreateRouteUseCase(repository);
        const output = await createUseCase.execute({
            title: 'My title',
            startPosition: { lat: 15, lng: 15 },
            endPosition: { lat: 20, lng: 20 },
        });

        expect(repository.items).toHaveLength(1);

        expect(output).toStrictEqual({
            id: repository.items[0].id,
            title: 'My title',
            startPosition: { lat: 15, lng: 15 },
            endPosition: { lat: 20, lng: 20 },
            points: [],
        });

    })
})