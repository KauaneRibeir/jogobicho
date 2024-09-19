import mongoose from "mongoose";

const main = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.CLUSTER_ADDRESS}/${process.env.DB_NAME}`
    );
    console.log("Connected with db")
  } catch (error) {
    console.log(error);
  }
};

main();

export default mongoose;