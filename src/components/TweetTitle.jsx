function TweetTitle({text,icone, author}){
    return(
        <div className="tweet-title">
            <img src={icone} alt="" />
            <h3>{text}</h3>
            <p>{author}</p>
        </div>
    )
}

export default TweetTitle;