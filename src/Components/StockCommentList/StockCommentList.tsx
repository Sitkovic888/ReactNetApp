import React from "react";
import { CommentGet } from "../../Models/Comment";
import StockCommentListItem from "./StockCommentListItem";

type Props = {
  comments: CommentGet[];
};

const StockCommentList = ({ comments }: Props) => {
  return (
    <>
      {comments &&
        comments.map((c) => {
          return <StockCommentListItem comment={c} />;
        })}
    </>
  );
};

export default StockCommentList;
