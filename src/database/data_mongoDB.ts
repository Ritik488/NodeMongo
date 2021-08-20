
/*
*
* Connecting to data using mongodb 
  TODO: Next We will connect it using mongoose
? Mongoose is a better way to perform CRUD Operations 
*/

import mongodb from "mongodb";
import dotenv from "dotenv";
import { MongoClient } from 'mongodb';

const MongoURL = "mongodb+srv://Ritik:86BWEyyqI2viYAI7@cluster0.pf2yh.mongodb.net/";
const MongoDatabase = "myfirstdatabase";
const MongoCollection = 'todos';
dotenv.config();
export const getData = async () => {
  const client = await MongoClient.connect(MongoURL)
    .catch((err) => {
      console.log(err)
    })

  if (!client) {
    return []
  }

  try {
    console.log("Database Connected");
    const db = client.db(MongoDatabase)
    const collection = db.collection(MongoCollection)
    const dataFromMongoDb = await collection.find().toArray()
    console.log(dataFromMongoDb)
  } catch (err) {
    return err
  } finally {
    client.close()
  }
}

export const sendData = async () => {
  const client = await MongoClient.connect(MongoURL)
    .catch((err) => {
      console.log(err)
    })

  if (!client) {
    return []
  }

  try {
    console.log("Database Connected");
    const db = client.db(MongoDatabase)
    const collection = db.collection(MongoCollection)
    let sendDataToMongoDB = await collection.insertOne(
      {
        name: "Ritik",
        email: "miglaniritik20@gmail.com"
      },
      (err, data) => {
        if (err) throw err;
        console.log(data);
      }
    )

  } catch (err) {
    return err
  } finally {
    // client.close()
  }
}

export const sendManyData = async () => {
  const client = await MongoClient.connect(MongoURL)
    .catch((err) => {
      console.log(err)
    })

  if (!client) {
    return []
  }

  try {
    console.log("Database Connected");
    const db = client.db(MongoDatabase)
    const collection = db.collection(MongoCollection)
    let sendDataToMongoDB =  collection.insertMany(
      [
        {
          name: "User1",
          email: "User1@gmail.com"
        },
        {
          name: "User2",
          email: "User2@gmail.com"
        },
        {
          name: "User3",
          email: "User3@gmail.com"
        },
      ],
      (err, data) => {
        if (err) throw err;
        console.log(data);
      }
    )

  } catch (err) {
    return err
  } finally {
    // client.close()
  }
}

export const getSpecificData = async () => {
  const client = await MongoClient.connect(MongoURL)
    .catch((err) => {
      console.log(err)
    })

  if (!client) {
    return []
  }

  try {
    console.log("Database Connected");
    const db = client.db(MongoDatabase)
    const collection = db.collection(MongoCollection)
    const filter = {
      name: "User1",
    }
    const dataFromMongoDb = await collection.findOne(filter, (err,data)=>{
      if (err) throw err;
      console.log(data);
    })
    console.log(dataFromMongoDb)
  } catch (err) {
    return err
  } finally {
    // client.close()
  }
}

export const deleteSpecificData = async () => {
  const client = await MongoClient.connect(MongoURL)
    .catch((err) => {
      console.log(err)
    })

  if (!client) {
    return []
  }

  try {
    console.log("Database Connected");
    const db = client.db(MongoDatabase)
    const collection = db.collection(MongoCollection)
    const filter = {
      name: "User3",
    }
    const dataFromMongoDb = await collection.deleteOne(filter, (err,data)=>{
      if (err) throw err;
      console.log(data);
    })
    
  } catch (err) {
    return err
  } finally {
    // client.close()
  }
}

