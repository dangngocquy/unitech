import React, { useState, useEffect } from 'react';
import Notification from '../../../components/designLayouts/Notification';
import { LogoMobile } from '../../../assets/images';
import { BsSend } from 'react-icons/bs';

const CommentItem = ({ comment, handleReplySubmit }) => {
    const [replies, setReplies] = useState([]);
    const [name, setName] = useState('');
    const [reply, setReply] = useState('');
    const [showReplyBox, setShowReplyBox] = useState(false);
    const [showReplies, setShowReplies] = useState(false);
    const [nameError, setNameError] = useState('');
    const [replyError, setReplyError] = useState('');
    const [replySuccess, setReplySuccess] = useState(false);
    const [hasReply, setHasReply] = useState(comment.replies && comment.replies.length > 0);

    const handleToggleReplyBox = () => {
        setShowReplyBox(!showReplyBox);
    };

    const handleToggleReplies = () => {
        setShowReplies(!showReplies);
        setHasReply(false);
    };

    const handleSubmitReply = (e) => {
        e.preventDefault();
        if (!name) {
            setNameError(<Notification type="warning" content="Bạn chưa nhập tên!" />);
            return;
        } else {
            setNameError('');
        }
        if (reply.length < 5) {
            setReplyError(<Notification type="warning" content="vui lòng nhập ít nhất 5 kí tự!" />);
            return;
        } else {
            setReplyError('');
        }

        handleReplySubmit(comment.id, { name, text: reply });
        setName('');
        setReply('');
        setReplySuccess(true);
        setHasReply(true);
    };

    useEffect(() => {
        setReplies(comment.replies || []);
    }, [comment.replies]);

    return (
        <div className='Item-containers-unt'>
            
            <div className='box-comment-containers'>
                <img src={LogoMobile} alt="Khách hàng Unitech" />
                <b>{comment.name}</b>
            </div>
            <div className='box-reply'>
                <p style={{ fontSize: '13px' }}>{comment.text}</p>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1rem', justifyContent: 'flex-end' }}>
                    <p onClick={handleToggleReplyBox} className='text-reply-unt'>Trả lời</p>
                    {hasReply && (
                        <span onClick={handleToggleReplies} className='text-reply-unt'>
                            {showReplies ? 'Ẩn câu trả lời' : `Hiển thị câu trả lời (${comment.replies.length})`}
                        </span>
                    )}
                </div>
            </div>

            {showReplies && (
                replies.map((reply) => (
                    <div key={reply.id} className='box-reply-2'>
                        <div className='box-comment-containers'>
                            <img src={LogoMobile} alt="Khách hàng Unitech" />
                            <b>{reply.name}</b>
                        </div>
                        <div className='box-reply'>
                            <p style={{ fontSize: '13px' }}>{reply.text}</p>
                        </div>
                    </div>
                ))
            )}
            {showReplyBox && (
                <>
                    <form onSubmit={handleSubmitReply} className='repty-top'>
                        <div className='box-comment-containers'>
                            <img src={LogoMobile} alt="Khách hàng Unitech" />
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Tên của bạn"
                            />
                        </div>
                        {nameError && <div>{nameError}</div>}
                        <div className='box-comment-textarea'>
                            <textarea
                                value={reply}
                                onChange={(e) => setReply(e.target.value)}
                                placeholder="Trả lời..."
                                className='textarea-box'
                            ></textarea>
                            <div style={{ float: 'right' }}>
                                <button type="submit" className='send-blue-unitech'><BsSend size={16} /> Gửi</button>
                            </div>
                        </div>
                        {replyError && <div>{replyError}</div>}
                        {replySuccess && <Notification type="success" content="Gửi phản hồi thành công!" />}
                    </form>
                </>
            )}
        </div>
    );
};

export default CommentItem;
