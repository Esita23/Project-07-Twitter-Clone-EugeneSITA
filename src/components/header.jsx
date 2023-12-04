import TopTweets from "./TopTweets";
// import PageTitle from "./PageTitle";
import PageTitle from "./PageTitle";

function Header() {
    return ( <div className="header">
        <PageTitle />
        <TopTweets />
    </div> );
}
 
export default Header;