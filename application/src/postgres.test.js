
const postgres = require('@postgres');

describe.skip('Postgres', () => {

    test('leer la base de datos', async () => {
        jest.setTimeout(60000);
        let results = await postgres('SELECT 4 + 2 AS solution');
        expect(results.rows[0].solution).toEqual(6);
    });

});
