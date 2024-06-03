export class CommentData {
  public title: string;
  public content: string;

  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
  }
}

export type CommentDataType = {
  title: string;
  content: string;
}

export type CommentGet = {
  title: string;
  content: string;
  createdBy: string;
}