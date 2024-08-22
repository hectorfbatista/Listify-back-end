import mongoose from "mongoose"


async function connectDataBase() {
  await mongoose.connect(
    "mongodb+srv://hectorfbatista:0HjcSzpGNT2KpBXk@listifydb.5t4pc.mongodb.net/")
}

export default connectDataBase