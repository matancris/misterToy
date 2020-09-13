
const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId


async function query(filterBy = {}) {
    const criteria = _buildCriteria(filterBy)
    console.log("query -> filterBy", criteria)
    const collection = await dbService.getCollection('review')
    try {
        // const reviews = await collection.find(criteria).toArray();
        var reviews = await collection.aggregate([
            {
                $match: criteria
            },
            {
                $lookup:
                {
                    from: 'user',
                    localField: 'byUserId',
                    foreignField: '_id',
                    as: 'byUser'
                }
            },
            {
                $unwind: '$byUser'
            }
        ]).toArray()
        console.log(reviews);
        reviews = reviews.map(review => {
            review.byUser = { _id: review.byUser._id, username: review.byUser.username }
            // review.aboutToy = { _id: review.aboutToy._id, toyname: review.aboutToy.name }
            delete review.byUserId;
            delete review.aboutToyId;
            return review;
        })

        return reviews
    } catch (err) {
        console.log('ERROR: cannot find reviews')
        throw err;
    }
}

async function remove(reviewId) {
    const collection = await dbService.getCollection('review')
    try {
        await collection.deleteOne({ "_id": ObjectId(reviewId) })
    } catch (err) {
        console.log(`ERROR: cannot remove review ${reviewId}`)
        throw err;
    }
}


async function add(review) {
    review.byUserId = ObjectId(review.byUserId);
    review.toyId = ObjectId(review.toyId);

    const collection = await dbService.getCollection('review')
    try {
        await collection.insertOne(review);
        return review;
    } catch (err) {
        console.log(`ERROR: cannot insert user`)
        throw err;
    }
}

function _buildCriteria(filterBy) {
    const criteria = {};
    for (const key in filterBy) {
        criteria[key] = ObjectId(filterBy[key])
    }
    return criteria;
}

module.exports = {
    query,
    remove,
    add
}


