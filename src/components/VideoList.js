import React from 'react';
import styled from "styled-components"

const Item = styled.li`
    img {
        border: ${props => props.active ? "3px solid coral" : "3px solid gray" };
        width: 200px;
        margin-bottom: 15px;
        curser: pointer;
        border-radius: 5px;
        :hover {
            border-color: limegreen;
            transform: scale(1.1);
        }
    }
`;
//active = true or false
const List = styled.ul`

    padding = 0;
    list-style-type: none;
  
`;

export const VideoList = (props) => {


    return (

        <List>
            {props.children}
        </List>
    )
}

export const VideoListItem = ({ video, selectedVideo, selectVideo }) => {
    return (

        <Item active={video === selectedVideo} onClick={()=>selectVideo(video)}>
            <img src={video.snippet.thumbnails.medium.url} />
        </Item>

    )
}

