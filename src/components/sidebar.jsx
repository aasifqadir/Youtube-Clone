import '../styles/sidebar.css'
import Home from '@mui/icons-material/HomeOutlined';
import History from '@mui/icons-material/HistoryOutlined';
import Subscriptions from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibrary from '@mui/icons-material/VideoLibraryOutlined';
import WhatshotOut from '@mui/icons-material/WhatshotOutlined';
import ShoppingBag from '@mui/icons-material/ShoppingBagOutlined';
import MusicNote from '@mui/icons-material/MusicNoteOutlined';
import MovieCreation from '@mui/icons-material/MovieCreationOutlined';
import EmojiEvents from '@mui/icons-material/EmojiEventsOutlined';
const Sidebar = () => {
    const links = [
        { image: <Home />, link: "Home" },
        { image: <History />, link: "Shorts" },
        { image: <Subscriptions />, link: "Subscriptions" },
        { image: <VideoLibrary />, link: "Library" },
        { image: <History />, link: "History" },
        { image: <WhatshotOut />, link: "Trending" },
        { image: <ShoppingBag />, link: "Shopping" },
        { image: <MusicNote />, link: "Music" },
        { image: <MovieCreation />, link: "Movies" },
        { image: <EmojiEvents />, link: "Sports" }
    ]
    return (
        <div className="sidebar">
            <div className="sidebarlinks">
                <ul>
                    {links.map((data) => {
                        return (
                            <li>{data.image}<a href="/">{data.link}</a></li>
                        )
                    })}
                </ul>
            </div>
        </div >
    );
}

export default Sidebar;