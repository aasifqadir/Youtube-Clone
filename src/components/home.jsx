import Categories from './categorieis';
import '../styles/home.css'
import Videos from './videos';
const Home = () => {
    return (
        <div className="home">
            <Categories />
            <Videos />
        </div>
    );
}

export default Home;