import '../styles/videos.css'
const Videocard = (props) => {
    let video = props.value
    let removeVideo = props.remove
    return (
        <div className="videos">
            {video.map((data) => {
                return (
                    <div className="videos_list">
                        <img src={data.thumbnail} alt="" />
                        <div className="discription">
                            <h4>{data.title}</h4>
                            <p>{data.channelName}</p>
                            <div className='btn'>
                                <p>{data.views}M views</p>
                                <input type="button" value="Not Intrested" onClick={() => removeVideo(data.id)}/>
                                {/* <button ></button> */}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default Videocard;