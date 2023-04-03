import '../styles/categories.css'

const Categories = () => {

    const links = [
        { link: "All" },
        { link: "Music" },
        { link: "Mixes" },
        { link: "Bollywood Music" },
        { link: "Live" },
        { link: "Gaming" },
        { link: "Cricket" },
        { link: "Comedy" },
        { link: "Lectures" },
        { link: "Vocal Music" },
    ]
    return (
        <div className="categories">
            <div className="categories_links">
                <ul>
                    {links.map((data) => {
                        return(
                            <li><a href="/">{data.link}</a></li>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Categories;