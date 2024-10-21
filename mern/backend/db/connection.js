import { MongoClient, ServerApiVersion } from "mongodb";

const URI = "mongodb://mongodb:27017";
const client = new MongoClient(URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let db;

const connectToDatabase = async () => {
  try {
    // Connect the client to the server
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    // Initialize the 'employees' database
    db = client.db("employees");
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err);
  }
};

await connectToDatabase();

export default db;

