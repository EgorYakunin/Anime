"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const mongodb_1 = require("mongodb");
class Mongo {
    /**
     * --- Opening and closing connection to db ---
     */
    static start_connection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.client.connect();
                console.log('Connection with db established successfully!');
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    static close_connection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.client.close();
                console.log('The connection to the db was closed!');
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    static write_one(collection_name, object) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.start_connection();
                const collection = this.client.db().collection(collection_name.toString());
                const result = yield collection.insertOne(object);
                console.log(`A document was inserted with the _id: ${result.insertedId}`);
            }
            catch (e) {
                console.log(e);
            }
            finally {
                yield this.close_connection();
            }
        });
    }
    /**
     * Not available yet
     */
    static write_many(collection_name, object) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.start_connection();
                const collection = this.client.db().collection(collection_name.toString());
                const result = yield collection.insertMany(object);
                console.log(`${result.insertedCount} documents were inserted`);
            }
            catch (e) {
                console.log(e);
            }
            finally {
                yield this.close_connection();
            }
        });
    }
    static read_one(collection_name, filter = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.start_connection();
                const collection = this.client.db().collection(collection_name.toString());
                return yield collection.findOne(filter);
            }
            catch (e) {
                console.log(e);
            }
            finally {
                yield this.close_connection();
            }
        });
    }
    static read_many(collection_name, filter = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.start_connection();
                const collection = this.client.db().collection(collection_name.toString());
                const cursor = collection.find(filter);
                return yield cursor.toArray();
            }
            catch (e) {
                console.log(e);
            }
            finally {
                yield this.close_connection();
            }
        });
    }
    static update_one(collection_name, filter, object) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.start_connection();
                const collection = this.client.db().collection(collection_name.toString());
                const result = yield collection.updateOne(filter, object);
                console.log(`${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`);
            }
            catch (e) {
                console.log(e);
            }
            finally {
                yield this.close_connection();
            }
        });
    }
    static delete_one(collection_name, filter) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.start_connection();
                const collection = this.client.db().collection(collection_name.toString());
                const result = yield collection.deleteOne(filter);
                if (result.deletedCount === 1) {
                    console.log("Successfully deleted one document.");
                }
                else {
                    console.log("No documents matched the query. Deleted 0 documents.");
                }
            }
            catch (e) {
                console.log(e);
            }
            finally {
                yield this.close_connection();
            }
        });
    }
}
exports.db = Mongo;
Mongo.client = new mongodb_1.MongoClient('mongodb://localhost:27017/anime');
