import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ email: "Invalid email address." });
      return;
    }

    const newRegistration = { userEmail };

    let client;

    try {
      client = await MongoClient.connect(
        "mongodb+srv://saroj:B3hbGjOCulat2WWZ@node-sgx7x.mongodb.net/nextjs?retryWrites=true&w=majority",
        { useUnifiedTopology: true }
      );
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Could not connect to database." });
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection("nextjs").insertOne(newRegistration);
      newRegistration.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Storing newRegistration failed!" });
      return;
    }

    client.close();

    res
      .status(201)
      .json({ message: "Successfully registered!", message: newRegistration });
  }
}

export default handler;
