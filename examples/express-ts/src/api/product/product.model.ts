import { Schema, model, Document } from 'mongoose';

export interface ProductDocument extends Document {
  name: string;
  description: string;
  price: number;
  createdBy: string;
  owner: string;
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  }
}, {
  timestamps: true,
  versionKey: false,
});

const Product = model<ProductDocument>('Product', ProductSchema);

export default Product;
