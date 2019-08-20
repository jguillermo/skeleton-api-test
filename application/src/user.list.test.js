const request = require('@request');

describe('Listar usuarios', () => {
    test('todos los usuarios', async () => {
        let {body, statusCode} = await request('GET', '/user');
        expect(statusCode).toEqual(200);
        expect(body).toEqual([
            {id: 1, name: 'Jose'},
            {id: 2, name: 'Ariana'}
        ]);
    });
    test('un usuario con id 1', async () => {
        let {body, statusCode} = await request('GET', '/user/1');
        expect(statusCode).toEqual(200);
        expect(body).toEqual({
            "id": "1",
            "name": "Jose"
        });
    });
});
