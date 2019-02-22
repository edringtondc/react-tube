import React from 'react';

// import { Spinner } from 'reactstrap';

// export default class Spinner extends React.Component {
//   render() {
//     return (
//       <div>
//         <Spinner color="primary" />
//       </div>
//     );
//   }
// }


const VideoDetail = ({ video }) => {
    if (!video) {
        return <p>loading spinner here</p>
    }
    console.log(video)
    const videoId = video.id.videoId
    const videoURL = `https://www.youtube.com/embed/${videoId}?rel=0`

    return (
        <>
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={videoURL} allowFullScreen></iframe>

            </div>
            <h2>{video.snippet.title}</h2>
            <p> {video.snippet.description}</p>
        </>
    )
}

export default VideoDetail

