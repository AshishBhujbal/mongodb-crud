const {MongoClient,ObjectId} = require('mongodb');

const url ='mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName ="mydatabase";
const collectionName ="Users";

const main = async()=>
{
    //connect to server
    await client.connect();
    console.log("Connected to server.");

    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    
    return  collection;
}


const insertDocOne = async()=>
{
    const collection = await main();
    const data = await collection.insertOne({"name":"ashish bhujbal","address":"pune","age":24});
    console.log(data);
}

const insertDocMany = async()=>
{
    const collection = await main();
    const data = await collection.insertMany([{"name":"shubham shelke","address":"dhamari","age":26},{"name":"akshay raut","address":"mumbai","age":19},{"name":"akshay bhosure","address":"delhi","age":29}]);
    console.log(data);
}

const deletDocOne = async ()=>
{
    const collection =await main();
    const data = await collection.deleteOne({_id:new ObjectId("64dc3e3b32153e59566c533c")});
    console.log(data);
}

const updateDocOne = async()=>
{
    const collection = await main();
    const data =await collection.updateOne({_id:new ObjectId("64dc3fc15a39450ab058c7d3")},{$set:{"address":"New York"}});
    console.log(data);
}
const getDocAll = async()=>
{
    const collection = await main();
    const data = await collection.find().toArray();
    console.log(data);
}

//call to insertOne
      // insertDocOne();
// call to isert many
     // insertDocMany();
//call to deletDocOne
    //    deletDocOne();
// call to updateDocOne
    //    updateDocOne();
// call to  getDocAll
     getDocAll();