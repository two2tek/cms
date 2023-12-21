import {model, models, Schema} from "mongoose";

const OrderSchema = new Schema({
  line_items:Object,
  name:String,
  email:String,
  phone:String,
}, {
  timestamps: true,
});

export const Order = models?.Order || model('Order', OrderSchema);