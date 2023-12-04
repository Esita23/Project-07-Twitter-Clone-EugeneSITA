import Tweet from "./Tweet"
import Image from "../style/images/tweet-profile-photo.png"
import Image2 from "../style/images/twitter.svg"
import Image3 from "../style/images/image 1.svg"
import Image4 from "../style/images/tweet-image.png"



function Tweets(){
    return(
        
        <div className="tweets">
           <Tweet  image_profile={Image} text_content="President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a 'major breakthrough' that would serve to both strengthen the US steel industry and combat the global climate crisis" author= "CNN" acro_author="@CNN" time= "7m'" />
           <Tweet  image_profile={Image3} image_tweet={Image4} text_content="President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a 'major breakthrough' that would serve to both strengthen the US steel industry and combat the global climate crisis" author= "CNN" acro_author="@CNN" time= "7m'" />
           <Tweet image_profile={Image2} text_content=" crisis" author= "CNN" acro_author="@CNN" time= "7m'" />
           <Tweet image_profile={Image2} text_content=" crisis" author= "CNN" acro_author="@CNN" time= "7m'" />
        </div>
        

    )
}

export default Tweets;