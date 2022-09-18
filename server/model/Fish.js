import { Int32 } from 'mongodb';
import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const fishSchema = new Schema({
  name: String,
  color: String,
  fish_size: String,
  place: String,
  level: String,
  aggression: String,
  type: String,
  num: String,
  aquarium_size: Number,
  fish_img: String,
  Neighbors: [String],
});

const Fish = model('Fish', fishSchema);
export default Fish;
