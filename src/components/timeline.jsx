import Tweets from "./Tweets";
import TwitteEditors from "./TwitteEditors";
import Header from "./header";

function Timeline()  {
    return ( 
    <div className="timeline">
        <Header/>
        <TwitteEditors/>
        <Tweets/>
    </div> );
}
 
export default Timeline;