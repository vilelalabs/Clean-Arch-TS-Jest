import { Route, RouteProps } from './route.entity';

describe('Route Tests', () => {
    test('constructor', () => {
        let routeProps: RouteProps = {
            title: 'Minha Rota',
            startPosition: { lat: 15, lng: 15 },
            endPosition: { lat: 20, lng: 20 },
        }

        let route = new Route(routeProps);

        expect(route.props).toStrictEqual({
            ...routeProps,
            points: []
        })

        routeProps = {
            title: 'Minha Rota',
            startPosition: { lat: 15, lng: 15 },
            endPosition: { lat: 20, lng: 20 },
            points: [{ lat: 10, lng: 20 }, { lat: 20, lng: 15 }]
        }

        route = new Route(routeProps);

        expect(route.id).toBeDefined();

        expect(route.props).toStrictEqual({
            ...routeProps,
            points: [{ lat: 10, lng: 20 }, { lat: 20, lng: 15 }]
        })


    })

    test('updateTitle method', () => {
        const routeProps: RouteProps = {
            title: 'Minha Rota',
            startPosition: { lat: 15, lng: 15 },
            endPosition: { lat: 20, lng: 20 },
        }

        const route = new Route(routeProps);

        route.updateTitle('Nova Rota');
        expect(route.props.title).toBe('Nova Rota');

    })

    test('updatePosition method', () => {
        const routeProps: RouteProps = {
            title: 'Minha Rota',
            startPosition: { lat: 15, lng: 15 },
            endPosition: { lat: 20, lng: 20 },
        }

        const route = new Route(routeProps);

        route.updatePosition(
            { lat: 10, lng: 10 },
            { lat: 30, lng: 30 });

        expect(route.props.startPosition)
            .toStrictEqual({ lat: 10, lng: 10 });
        expect(route.props.endPosition)
            .toStrictEqual({ lat: 30, lng: 30 });
    })

    test('updatePoints method', () => {
        const routeProps: RouteProps = {
            title: 'Minha Rota',
            startPosition: { lat: 15, lng: 15 },
            endPosition: { lat: 20, lng: 20 },
        }

        const route = new Route(routeProps);

        route.updatePoints(
            [{ lat: 10, lng: 10 },
            { lat: 30, lng: 30 }]);

        expect(route.props.points)
            .toStrictEqual([{ lat: 10, lng: 10 },
            { lat: 30, lng: 30 }]);

        expect(route.props.points)
            .toHaveLength(2);
    })
})