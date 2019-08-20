const request = require('@request');

describe('eliminar User', () => {

    test('elimina el usuario 1, ok', async () => {
        let {body, statusCode} = await request('DELETE', '/user/1');
        expect(body).toEqual({message: 'eliminado el usuario 1'});
        expect(statusCode).toEqual(200);
    });

});