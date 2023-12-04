import TweetImage from "./TweetImage";
import TweetTitle from "./TweetTitle";
import TweetText from "./TweetText";
// import TweetOne from "./TweetOne";
// import TweetTwo from "./TweetTwo";
// import TweetTree from "./TweetTree";

function TweetBody(){
    return(
        <div className="tweet-body">
            <TweetText  icone="src\style\images\tweet-profile-photo.png" text="bonjour"/>
            <TweetTitle />
            <TweetImage />
            {/* <TweetOne/>
            <TweetTwo/>
            <TweetTree/> */}
            
        </div>
    )
}

export default TweetBody;