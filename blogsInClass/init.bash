#  IN THIS ORDER DUE TO ASSOCIATIONS

# sequelize model:generate --name categories --attributes \
#  title:string,description:string,imageURL:string

# run second

# sequelize model:generate --name author --attributes \
# firstName:string,lastName:string,bio:string,imageURL:string,contactInfo:string

# sequelize model:generate --name blog --attributes \
# title:string,abstract:string,body:string,isPublished:boolean,imageURL:string,\
# authorID:integer,categoryID:integer

# sequelize model:generate --name comments --attributes \
# title:string,message:string,name:string,email:string,blogID:integer