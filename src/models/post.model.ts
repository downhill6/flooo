export type IPost = {
  id: number;
  creator_id: string;
  content: string;
  created_time: string;
  updated_time: string;
  deleted_time: string | null;
  tags: string[];
};
