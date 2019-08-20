const request = require('@request');

describe('crear usuario', () => {

    test('datos ok', async () => {
        let {body, statusCode} = await request('POST', '/user', {name: 'jose'});
        expect(body).toEqual({"id": 3, "name": "jose"});
        expect(statusCode).toEqual(201);
    });

    test('Error, no se envia el nombre', async () => {
        let {body, statusCode} = await request('POST', '/user');
        expect(body).toEqual({
            mensaje: 'El nombre es necesario'
        });
        expect(statusCode).toEqual(400);
    });

});
