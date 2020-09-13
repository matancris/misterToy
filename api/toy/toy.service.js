
// const fs = require('fs')
// const toys = require('../../data/toy.json')
const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId


// function query(filterBy) {
//     var toysToReturn = toys;
//     if (filterBy.q) {
//         toysToReturn = toysToReturn.filter(toy => toy.name.includes(filterBy.q))
//     }
//     if (filterBy.inStock) {
//         toysToReturn = toysToReturn.filter(toy => toy.inStock)
//     }
//     if (filterBy.type) {
//         toysToReturn = toysToReturn.filter(toy => toy.type === filterBy.type)
//     }
//     // if (filterBy.sortBy) {

//     //     toysToReturn = toysToReturn.sort((str1, str1) => toy.type === filterBy.type)
//     // }
//     return Promise.resolve(toysToReturn);
// }

async function query(filterBy = {}) {
    const criteria = _buildCriteria(filterBy)
    const collection = await dbService.getCollection('toy')
    try {
        const toys = await collection.find(criteria).toArray();
        // toys.forEach(toy => delete toy.password);

        return toys
    } catch (err) {
        console.log('ERROR: cannot find toys')
        throw err;
    }
}



// function getById(id) {
//     const toy = toys.find(toy => toy._id === id)
//     return Promise.resolve(toy);
// }

async function getById(toyId) {
    const collection = await dbService.getCollection('toy')
    try {
        const toy = await collection.findOne({ "_id": ObjectId(toyId) })

        // user.givenReviews = await reviewService.query({ byUserId: ObjectId(user._id) })
        // user.givenReviews = user.givenReviews.map(review => {
        //     delete review.byUser
        //     return review
        // })
        return toy
    } catch (err) {
        console.log(`ERROR: while finding user ${toyId}`)
        throw err;
    }
}

async function remove(toyId) {
    const collection = await dbService.getCollection('toy')
    try {
        await collection.deleteOne({ "_id": ObjectId(toyId) })
    } catch (err) {
        console.log(`ERROR: cannot remove toy ${toyId}`)
        throw err;
    }
}

// function remove(id) {
//     console.log("remove -> toys", toys)
//     const idx = toys.findIndex(toy => toy._id === id)
//     toys.splice(idx, 1);
//     _saveToysToFile()
//     return Promise.resolve();
// }

async function update(toy) {
    const collection = await dbService.getCollection('toy')
    toy._id = ObjectId(toy._id);

    try {
        await collection.replaceOne({ '_id': toy._id }, toy )
        console.log("update -> toy", toy)
        return toy
    } catch (err) {
        console.log(`ERROR: cannot update toy ${toy._id}`)
        throw err;
    }
}

async function add(toy) {
    const collection = await dbService.getCollection('toy')
    try {
        await collection.insertOne(toy);
        return toy;
    } catch (err) {
        console.log(`ERROR: cannot insert toy`)
        throw err;
    }
}

// function save(toy) {
//     if (toy._id) {
//         const idx = toys.findIndex(currToy => currToy._id === toy._id)
//         toy.updatedAt = Date.now();
//         console.log("save -> toy", toy)
//         toys[idx] = {...toy}
//     } else {
//         toy.createdAt = Date.now();
//         console.log("save -> toy", toy)
//         toy._id = _makeId();
//         toy.inStock = true;
//         toys.unshift(toy);
//     }
//     _saveToysToFile();
//     return Promise.resolve(toy);
// }


// CRUDL: Create, Read, Update, Delete, List
module.exports = {
    query,
    getById,
    add,
    update,
    remove
}

function _buildCriteria(filterBy) {
    const criteria = {};
    if (filterBy.q) {
        console.log("function_buildCriteria -> filterBy.name", filterBy.q)
        criteria.name= { $regex: new RegExp(filterBy.q, 'ig') }
    }
    if (filterBy.type) {
        criteria.type= filterBy.type
    }
    if (filterBy.inStock) {
        criteria.inStock = true
    }
    // if (filterBy.name) {
    //     criteria.name= new RegExp(`/${filterBy.name}/i`)
    // }
    // if (filterBy.price) {
    //     criteria.balance = { $gte: +filterBy.minBalance }
    // }
    return criteria;
}

// function _makeId(length=5) {
//     var txt = '';
//     var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     for(var i=0; i < length; i++)  {
//         txt += possible.charAt(Math.floor(Math.random() * possible.length));
//     }
//     return txt;
// }

// function _saveToysToFile() {
//     fs.writeFileSync('data/toy.json', JSON.stringify(toys, null, 2));
// }
