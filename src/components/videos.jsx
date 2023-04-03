import { useState, useEffect } from "react";
import Videocard from './videoCard';

const Videos = () => {

    // let videoData = [
    //     {
    //         id: 1,
    //         thumbnail: image1,
    //         title: "How to Use VS Code? ",
    //         channelName: "Techinfo YT",
    //         views: 202
    //     },
    //     {
    //         id: 2,
    //         thumbnail: image2,
    //         title: "How to Download VS Code? ",
    //         channelName: "Code Valley",
    //         views: 80
    //     },
    //     {
    //         id: 3,
    //         thumbnail: image1,
    //         title: "How to Use VS Code? ",
    //         channelName: "Code Valley",
    //         views: 88
    //     },
    //     {
    //         id: 4,
    //         thumbnail: image1,
    //         title: "How to Use VS Code? ",
    //         channelName: "Code Valley",
    //         views: 88
    //     },
    //     {
    //         id: 5,
    //         thumbnail: image1,
    //         title: "How to Use VS Code? ",
    //         channelName: "Code Valley",
    //         views: 88
    //     },
    //     {
    //         id: 6,
    //         thumbnail: image1,
    //         title: "How to Use VS Code? ",
    //         channelName: "Code Valley",
    //         views: 88
    //     },
    //     {
    //         id: 7,
    //         thumbnail: image1,
    //         title: "How to Use VS Code? ",
    //         channelName: "Code Valley",
    //         views: 88
    //     },
    //     {
    //         id: 8,
    //         thumbnail: image1,
    //         title: "How to Use VS Code? ",
    //         channelName: "Code Valley",
    //         views: 88
    //     },
    //     {
    //         id: 9,
    //         thumbnail: image1,
    //         title: "How to Use VS Code? ",
    //         channelName: "Code Valley",
    //         views: 88
    //     },
    //     {
    //         id: 10,
    //         thumbnail: image1,
    //         title: "How to Use VS Code? ",
    //         channelName: "Code Valley",
    //         views: 88
    //     },
    //     {
    //         id: 11,
    //         thumbnail: image1,
    //         title: "How to Use VS Code? ",
    //         channelName: "Code Valley",
    //         views: 88
    //     },
    //     {
    //         id: 12,
    //         thumbnail: image1,
    //         title: "How to Use VS Code? ",
    //         channelName: "Code Valley",
    //         views: 88
    //     },
    // ]
    // useState
    let [video, setVideo] = useState([])

    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch('http://localhost:4000/videoData')
            let data = await response.json()
            setVideo(data)
        }
        fetchData()
    }, [])
    let removeVideo = (id) => {
        setVideo(video.filter(x => x.id !== id))
    }

    return (
        <div>
            <Videocard value={video} remove={removeVideo} />
        </div>
    );
}

export default Videos;