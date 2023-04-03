import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/addVideo.css'
const Refrence = () => {
    let navigate = useNavigate()
    let title = useRef(null)
    let channelName = useRef(null)
    let thumbnail = useRef(null)
    let views = useRef(null)
    let submit = (e) => {
        e.preventDefault()
        let data = {
            title: title.current.value,
            channelName: channelName.current.value,
            thumbnail: thumbnail.current.value,
            views: views.current.value
        }
        fetch('http://localhost:4000/videoData', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        alert('Video has been successfully added')
        navigate ('/')
        // console.log(data);
    }
    return (
        <div className="addVideo">
            <div className="videoDetail">

                <form action='' onSubmit={submit}>
                    <center><h2>Add Video</h2></center>
                    <input ref={title} type="text" placeholder='Title' />
                    <input ref={channelName} type="text" placeholder='Channel Name' />
                    <input ref={thumbnail} type="text" placeholder='thumbnail' />
                    <input ref={views} type="number" placeholder='views' />
                    <button>Add Video</button>
                </form>
            </div>
            <div className="image">
                <img src="https://i.ytimg.com/vi/lCTh5iCTBec/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAFC5_gKc-44CfXhw6TqO6c3DFWlA" alt="" />
            </div>
        </div>
    );
}

export default Refrence;