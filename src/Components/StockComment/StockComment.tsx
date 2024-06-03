import React, { useEffect, useState } from "react";
import StockCommentForm from "./StockCommentForm/StockCommentForm";
import { CommentDataType, CommentGet } from "../../Models/Comment";
import { getCommentApi, postCommentApi } from "../../Services/CommentService";
import { toast } from "react-toastify";
import Spinner from "../Spinners/Spinner";
import StockCommentList from "../StockCommentList/StockCommentList";

type Props = {
  stockSymbol: string;
};

const StockComment = ({ stockSymbol }: Props) => {
  const [comments, setComments] = useState<CommentGet[] | null>(null);
  const [loading, setLoading] = useState<boolean>();

  useEffect(() => {
    getComments();
  }, []);

  const handleComment = (e: CommentDataType) => {
    postCommentApi(e.title, e.content, stockSymbol)
      .then((res) => {
        if (res) {
          toast.success("A comment is created.");
          getComments();
        }
      })
      .catch((e) => {
        toast.warning(e);
      });
  };

  const getComments = () => {
    setLoading(true);
    getCommentApi(stockSymbol).then((res) => {
      setLoading(false);
      setComments(res?.data!);
    });
  };

  return (
    <div className="flex flex-col">
      {loading ? <Spinner /> : <StockCommentList comments={comments!} />}
      <StockCommentForm symbol={stockSymbol} handleComment={handleComment} />
    </div>
  );
};

export default StockComment;
