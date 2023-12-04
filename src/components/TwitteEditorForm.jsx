import TwitteEditorButtons from "./TwitteEditorButtons";
import TwitteInput from "./TwitteInput";

function TwitteEditorForm() {
    return ( 
        <div className="tweet-editor-form">
            <TwitteInput />
            <TwitteEditorButtons />
            
        </div>
        
     );
}
 
export default TwitteEditorForm ;