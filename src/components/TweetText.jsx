function TweetText( {icone , text}){
    return(
        <div className="tweet-text">
            <div>
            <img className="tweet-avatar" src={icone} alt="" />
            </div>
            <div>
            <p>{text}</p>
            </div>
            

        </div>
    )
}

export default TweetText;