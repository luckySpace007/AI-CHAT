import express  from "express";
import ImageKit from "imagekit";
import cors from "cors";
import userChats from "./models/userChats.js";
import Chat from "./models/chat.js";
import mongoose from "mongoose";


const port = process.env.PORT || 3000;

const app = express();

app.use(cors({
    origin : process.env.CLIENT_URL,
}))

app.use(express.json());

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO)
        console.log("Connected to MongoDB");
    } catch (err) {
        console.log(err);
    }
}

const imagekit = new ImageKit({
    urlEndpoint: process.env.VITE_IMAGE_KIT_ENDPOINT,
    publicKey: process.env.VITE_IMAGE_KIT_PUBLIC_KEY,
    privateKey: process.env.VITE_IMAGE_KIT_PRIVATE_KEY,
  });

app.get('/api/upload' , (req,res) => {
    const result = imagekit.getAuthenticationParameters();
    res.send(result);
})
app.post('/api/chats' , async (req,res) => {
    const {text , userId} = req.body;
    
    try {
        // CREATE A NEW CHAT    
        const newChat = new Chat({
            userId : userId,
            history : [{ 
                role : "user" , 
                parts : [{text}] 
            }]
        });
      const savedChat = await newChat.save();   
      
      // CHECK IS THE USER CHAT EXISTS
      const userChats = await userChats.find({ userId: userId });

      // IF DOESN'T EXIST CREATE A NEW ONE AND ADD THE CHAT IN THE CHATS ARRAY
      if (!userChats.length) {
        const newUserChats = new userChats({
          userId: userId,
          chats: [
            {
              _id: savedChat._id,
              title: text.substring(0, 40),
            },
          ],
        });
        await newUserChats.save();
      }else{
        // IF EXIST , PUSH THE CHAT IN TO THE EXISTING ARRAY
        await userChats.updateOne(
            { userId: userId },
            {
              $push: {
                chats: {
                  _id: savedChat._id,
                  title: text.substring(0, 40),
                },
              },
            }
          );
          res.status(201).send(newChat._id);
      }

    } catch (err) {
        console.log(err);
        res.status(500).send("Error creating chat!");
    }

})
app.get('/api/upload' , (req,res) => {
    const result = imagekit.getAuthenticationParameters();
    res.send(result);
})

app.listen(port , () => {
    connect()
    console.log("Server Running on port 3000"); 
})