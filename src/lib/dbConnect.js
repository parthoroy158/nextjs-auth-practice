const { MongoClient, ServerApiVersion } = require('mongodb');

export const NextJa_Auth = {
    all_products:"all_products"
}

export const dbConnect = (collectionName) => {

    const uri = process.env.MONGODB_URI;
    // Create a MongoClient with a MongoClientOptions object to set the Stable API version
    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });

    return client.db(process.env.DB_NAME).collection(collectionName)
}