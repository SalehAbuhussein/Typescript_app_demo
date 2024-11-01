import mongoose from 'mongoose';

export interface IUser {
  username: string,
  email: string,
  password: string,
}

const UserSchema = new mongoose.Schema<IUser>({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
});

export default mongoose.model<IUser>('User', UserSchema);