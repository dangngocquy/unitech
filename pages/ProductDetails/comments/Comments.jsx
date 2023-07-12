import React, { useState, useEffect } from 'react';
import CommentItem from './CommentItem';
import Notification from '../../../components/designLayouts/Notification';
import { LogoMobile } from '../../../assets/images';
import { BsSend } from 'react-icons/bs';
import axios from 'axios';

const Comments = ({ imageId }) => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [comments, setComments] = useState([]);
  const [nameError, setNameError] = useState('');
  const [commentError, setCommentError] = useState('');
  const [commentSuccess, setCommentSuccess] = useState(false);
  const [suggestedText, setSuggestedText] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const suggestions = ["Good!", "Tuyệt vời", "Sản phẩm tốt!"];

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleCommentChange = (e) => {
    if (!suggestedText) {
      setComment(e.target.value);
    } else {
      setSuggestedText('');
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSuggestedText(suggestion);
    setComment(suggestion);
  };

  const handleReplySubmit = (parentId, replyComment) => {
    axios
      .post(`http://localhost:5000/uploads/${imageId}/comments`, {
        name: replyComment.name,
        comment: replyComment.text,
        parentId: parentId
      })
      .then((response) => {
        const updatedComments = [...comments];
        const parentComment = updatedComments.find((comment) => comment.id === parentId);
        if (parentComment) {
          parentComment.replies.push(response.data.id);
        }
        setComments(updatedComments);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      setNameError(<Notification type="warning" content="Bạn chưa nhập tên!" />);
      setTimeout(() => {
        setNameError('');
      }, 3000); // Tắt cảnh báo sau 3 giây
      return;
    }
    let commentText = suggestedText || comment;

    if (commentText.length < 5) {
      setCommentError(<Notification type="warning" content="vui lòng nhập ít nhất 5 kí tự!" />);
      setTimeout(() => {
        setCommentError('');
      }, 3000); // Tắt cảnh báo sau 3 giây
      return;
    }

    setIsLoading(true);

    axios
      .post(`http://localhost:5000/uploads/${imageId}/comments`, { name, comment: commentText })
      .then((response) => {
        setComments([...comments, response.data]);
        setName('');
        setComment('');
        setSuggestedText('');
        setIsLoading(false);
        setIsError(false);
        setCommentSuccess(true);
        setShowAlert(true); // Hiển thị cảnh báo thành công
        // Tắt cảnh báo sau 3 giây
        const timeout = setTimeout(() => {
          setShowAlert(false);
        }, 3000);
        // Hủy bỏ timeout nếu component bị unmounted hoặc biến trạng thái thay đổi
        return () => clearTimeout(timeout);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
      });
  };

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/uploads/${imageId}/comments`);
        setComments(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchComments();
  }, [imageId]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='box-comment-containers'>
          <img src={LogoMobile} alt="Khách hàng Unitech" />
          <input type="text" value={name} onChange={handleNameChange} placeholder="Tên của bạn..." />
        </div>
        {nameError && <div>{nameError}</div>}
        <div className='box-comment-textarea'>
          <textarea
            value={suggestedText || comment}
            onChange={handleCommentChange}
            disabled={isLoading}
            placeholder="Viết bình luận..."
            className='textarea-box'
          ></textarea>
          <div className='flex-comments-box-containers'>
            <div className='button-comment-flex'>
              {suggestions.map((suggestion, index) => (
                <button key={index} onClick={() => handleSuggestionClick(suggestion)} className='button-comment'>
                  {suggestion}
                </button>
              ))}
            </div>
            {!commentSuccess && !isError && (
              <button type="submit" disabled={isLoading} className='send-blue-unitech'>
                <BsSend size={16}/>{isLoading ? 'Chờ xí nhé...' : 'Gửi bình luận'}
              </button>
            )}
          </div>
        </div>
      </form>
      <div>
        {comments.map((comment, index) => (
          <CommentItem key={index} comment={comment} handleReplySubmit={handleReplySubmit} />
        ))}
      </div>
      {commentError && <div>{commentError}</div>}
      {showAlert && (
        <div>
          <Notification type="success" content="Gửi bình luận thành công!" />
        </div>
      )}
      {isError && <Notification type="error" content="Không thể gửi bình luận!" />}
    </div>
  );
};

export default Comments;