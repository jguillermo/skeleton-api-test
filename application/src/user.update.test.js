const request = require('@request');

describe('Actualizar User', () => {


    test('datos Ok', async () => {
        let {body, statusCode} = await request('PUT', '/user/1', {name: 'jose'});
        expect(statusCode).toEqual(200);
        expect(body).toEqual({"id": "1", "name": "jose"});
    });

    test('Error, no se envia el nombre', async () => {
        let {body, statusCode} = await request('PUT', '/user/1');
        expect(statusCode).toEqual(400);
        expect(body).toEqual({
            "mensaje": "El nombre es necesario",
        });
    });

});
