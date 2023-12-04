
import Group from "../style/images/Group.svg"

import Reply from "../style/images/Reply.svg"
import Like from "../style/images/Like.svg"
import Retweet from "../style/images/Retweet.svg"
import Replies from "../style/images/Tweet-Replies.svg"



function Tweet({image_profile,text_content,author,acro_author,time, image_tweet}){
    return(
        <div className="tweet"> 
        <img className="tweet-avatar" src={image_profile} alt="" />
        <div className="tweet-content">
            <div className="tweet-body">
                <div className="tweet-title">
                    <h3 className="tweet-title-author">{author}</h3>
                    <img src={Group} />
                    <span className="tweet-title-details">{acro_author}</span>
                    <span className="tweet-title-details">.</span>
                    <span className="tweet-title-details">{time}</span>
                </div>
                <div className="tweet-text">{text_content}</div>
                <img className="tweet-image" src={image_tweet} alt="" />
            </div>
            <div className="tweet-actions">
                <div className="tweet-action">
                    <img src={Reply} alt="" />
                    <span>57</span>
                </div>
                <div className="tweet-action">
                    <img src={Like} alt="" />
                    <span>144</span>
                </div>
                <div className="tweet-action">
                    <img src={Retweet} alt="" />
                    <span>80</span>
                </div>
                <div className="tweet-action">
                    <img src={Replies}  alt="" />
                    <span></span>
                </div>
            </div>

        </div>

        </div>
    )
}



export default Tweet;