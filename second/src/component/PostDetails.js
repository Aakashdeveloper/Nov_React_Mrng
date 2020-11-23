import React from 'react';

const PostDetails = (props) => {
    console.log(props.match.params.topic)
    return(
        <div class="panel panel-warning">
            <div class="panel-heading">{props.match.params.topic} Details page</div>
            <div class="panel-body">
                <h3>{props.match.params.topic}</h3>
                {props.match.params.topic} is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
            </div>
        </div>
    )
}

export default PostDetails;