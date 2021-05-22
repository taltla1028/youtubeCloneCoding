import React,{useEffect, useState} from 'react';
import SingleComment from './SingleComment';
function ReplyComment(props) {

        const [ChildCommentNumber, setChildCommentNumber] = useState(0)
        const [OpenReplyComments, setOpenReplyComments] = useState(false)
            useEffect(() => {
            let commentNumber = 0;

            props.commentLists.map((comment)=>{
                if(comment.resposeTo === props.parentCommentId){
                    commentNumber ++
                }
            })

            setChildCommentNumber(commentNumber)

            
        }, [props.commentLists, props.parentCommentId])

        const renderReplyComment = (parentCommentId) => {

          return  props.commentLists.map((comment, index) => (
                <React.Fragment>

                
                    {comment.resposeTo === parentCommentId &&
                    <div style={{ width: '80%', marginLeft:'40px'}}>
                        <SingleComment key={index} refreshFunction={props.refreshFunction} comment={comment} postId={props.videoId} />
                        <ReplyComment refreshFunction={props.refreshFunction} parentCommentId={comment._id} postId={props.videoId} commentLists={props.commentLists} />
                    </div>
                    
            
                }
            </React.Fragment>

            )) 
        
        }
            const onHandleChange = () => {
                setOpenReplyComments(!OpenReplyComments)
            }

    return (
        <div>
            {ChildCommentNumber > 0 &&
                <p style={{ fontSize: '14px', margin: 0, color: 'gray'}} onClick={onHandleChange}>
                    View {ChildCommentNumber} more comment(s)
                </p>
            }
    
            { OpenReplyComments && renderReplyComment(props.parentCommentId)}

        </div>
    )
}

export default ReplyComment
