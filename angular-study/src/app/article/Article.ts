export interface Article {
  articleId: string;
  title: string;
  content: string;
  view: number;
  like: number;
  writer: string;
  writeAt: Date;
  updateAt?: Date;
}
