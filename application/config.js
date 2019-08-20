// ============================
//  HOST
// ============================
process.env.HOST = 'http://server:8056';
// process.env.HOST = 'http://localhost:8056';
// ============================
//  DATABASE
//  'mysql://user:pass@host:port/dbname'
// ============================
process.env.DATABASE_MYSQL = 'mysql://root:1234@mysql:3306/dbproject?debug=false';


process.env.DATABASE_PG = 'postgresql://postgres:1234@postgres:5432/dbproject';

