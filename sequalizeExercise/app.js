let db = require('./models')

// sequel equivalent to SELECT *
// puts out an array
// db.user.findAll()
//     .then((results) => {
//         results.forEach(record => {
//             console.log(record.id, record.firstName, record.lastName);
//         });
//     });

// found by id was deprecated
// db.user.findByPk(1)
//     .then((record) => {
//         console.log(record.firstName, record.lastName)
//     })

// Create a new record
// db.user.create({firstName:'Eric', lastName:'Fisher', email:'fisher@dc.com'})
//     .then((user) => {
//         console.log(user);
//     })

let user = db.user;

// find all where...
// user.findAll({where: {lastName: 'Fisher'}})
//     .then((results) => {
//         results.forEach(record => {
//             console.log(record.firstName, record.lastName);
//         });
//     })

// Delete row
// user.destroy({where: {id:5}})
//     .then((rowDeleted) => {
//         if( rowDeleted == 1){
//             console.log('Deleted successfully');
//         }
//     })

// save data...
// user.findByPk(1)
//     .then((record) => {
//         update = record;

//         update.email = 'alfie@santos.com';

//         update.save()
//             .then(() => {
//                 console.log('Update successful');
//             })
//     })

// pagination...
// some options...
// user.findAll({where: {}, include: [], order:[], limit:2)

// user.findAll({limit:2, offset:2, order:[['lastName', 'ASC']]})
//     .then((results) => {
//         results.forEach(record => {
//             console.log(record.firstName, record.lastName);
//         });
//     })

user.findAll({include: [{model: db.task}]})
    .then((records) => {
        // console.log(record[0].firstName, record[0].tasks)
        records.forEach(record => {
            console.log(record.firstName, record.lastName)

            record.tasks.forEach(element => {
                console.log(`   >${element.title}`);
            })
        });
    })