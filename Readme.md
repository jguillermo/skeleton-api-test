Testing API
===========

Aplicación para correr pruebas en APIS rest

install
---
```bash
make install
```
run
---
```bash
make test
```

Config
-----
./application/config.js
```js
process.env.HOST = 'http://server:8056';


process.env.DATABASE_MYSQL = 'mysql://root:1234@mysql:3306/dbproject?debug=false';


process.env.DATABASE_PG = 'postgresql://postgres:1234@postgres:5432/dbproject';
```

hay 3 ejemplos de test: "containner/docker-compose.xxxxx.yml", copiar en contenido y pegarlo dentro de "container/docker-compose.yml"
 y luego correr los test
 
 quitar el comentario de .skip dentro de los test de database para hacer test a la base de datos