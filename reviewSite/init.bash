# RUN FIRST
# sequelize model:generate --name categories --attributes title:string

# RUN SECOND
# sequelize model:generate --name items --attributes \
# productName:string,price:integer,description:string,imageURL:string

# RUN THIRD
sequelize migration:create --name addForeignKey