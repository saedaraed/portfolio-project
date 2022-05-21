import { ParentBar, ChildBar, ProgressBar } from "./Style";

function Bar({ done, name }) {
    return ( <
        ProgressBar >
        <
        p > { name } < /p>{" "} <
        ParentBar > { " " } <
        ChildBar style = {
            { width: `${done}%` }
        } > { done } % < /ChildBar>{" "} < /
        ParentBar > { " " } <
        /ProgressBar>
    );
}

export default Bar;