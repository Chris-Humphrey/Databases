# RUN FIRST
# sequelize model:generate --name categories --attributes title:string

# RUN SECOND
# sequelize model:generate --name blog --attributes \
# title:string,abstract:string,body:string,isPublished:boolean,imageURL:string,authorId:integer,categoriesId:integer

# RUN THIRD
# sequelize model:generate --name author --attributes \
# firstName:string,lastName:string,bio:string,imageURL:string,contactInfo:integer

# RUN FOURTH
# sequelize model:generate --name comments --attributes \
# title:string,msg:string,name:string,email:string,blogId:integer

# Rename column
# sequelize migration:create --name categoryId

# Add foreign key for categories and blogs
# sequelize migration:create --name addForeignKey

# Add foreign keys for blogs
# sequelize migration:create --name addForeignKeyComments
