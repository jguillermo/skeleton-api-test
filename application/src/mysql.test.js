const request = require('@request');
const mysql = require('@mysql');

describe.skip('Mysql', () => {

    test('leer la base de datos', async () => {

        jest.setTimeout(60000);

        let results = await mysql('SELECT 4 + 2 AS solution');
        expect(results[0].solution).toEqual(6);
    });

});
