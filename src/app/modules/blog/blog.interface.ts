import { ObjectId } from 'mongoose';

// Blog Data Type
export type TBlog = {
  author?: ObjectId;
  title: string;
  content: string;
  isPublished: boolean;
};
