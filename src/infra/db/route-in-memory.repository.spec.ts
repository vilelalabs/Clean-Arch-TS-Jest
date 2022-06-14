import { Route, RouteProps } from "../../domain/route.entity";
import { RouteInMemoryRepository } from "./route-in-memory-repository"


describe('Route InMemory Repository Tests', () => {
    it('should insert a new route', async () => {
        const repository = new RouteInMemoryRepository();
        const routeProps: RouteProps = {
            title: 'Minha Rota',
            startPosition: { lat: 15, lng: 15 },
            endPosition: { lat: 20, lng: 20 },
        }

        const route = new Route(routeProps);
        await repository.insert(route);

        expect(repository.items).toHaveLength(1);
        expect(repository.items).toStrictEqual([route]);
    })
})
