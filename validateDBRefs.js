var docId = function (doc) {
    return doc._id;
};

var allPlaceIds = db.places.find({}, {_id: 1}).map(docId);

var peopleWithInvalidPlaceRefs = db.people.find({"place.$id": {$nin: allPlaceIds}}).map(docId);

print("Found the following documents with invalid DBRefs:");
var length = peopleWithInvalidPlaceRefs.length;
for (var i = 0; i < length; i++) {
    print(peopleWithInvalidPlaceRefs[i]);
}