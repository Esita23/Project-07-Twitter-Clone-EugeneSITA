import TweetBody from "./TweetBody";
import TweetTitle from "./TweetTitle";

function TweetContent(){
    return(<div className="tweet-content">
            <TweetBody/>
            <TweetTitle/>
        </div>
    )
}

export default TweetContent;