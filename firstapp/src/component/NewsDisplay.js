import React from 'react';

const NewsDisplay = (props) => {
    const renderList = props.newsData.map((data) => {
        return(
            <div key={data.id}>
                <h3>{data.title}</h3>
                <p>{data.feed}</p>
            </div>
        )
    })

    return(
       <div>
           {renderList}
       </div>
    )
}

export default NewsDisplay