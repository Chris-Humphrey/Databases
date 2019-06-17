<!-- SET UP DATABASE AND SEQUELIZE -->
1. npm init
2. npm install ejs express sequelize pg pg-hstore body-parser
3. createdb (name)
4. code init.bash
5. sequelize init
6. cd config.json
    - remove test and production
    - remove operatorsAlias
    - change username and dialect to "postgres"
    - change database to (nameOfDatabase)
7. bash init.bash [with only categories]
8. sequelize db:migrate [with only categories]
9. bash init.bash [with only dependent]
10. cd models/(dependent)
11. insert into .associate (models.(name).belongsTo(models.(parent)))
12. sequelize db:migrate [with new dependent file]
13. bash init.bash [creating column that we missed]
14. cd migrations/code(name) -- change both up and down
15. sequelize db:migrate [with new add column file]
16. sequelize seed:generate --name categories
17. cd seeders/code(name) -- bulkInsert into database
18. sequelize db:seed:all

<!-- SET UP FRONT-END -->
1. code app.js -- populate
2. mkdir routes, views, public
3. cd routes/code(names) -- populate
4. cd views/code(names) -- populate
5. sequelize migration:create --name categoryId
6. cd migrations/code(name) -- populate
7. sequelize db:migrate
8. 