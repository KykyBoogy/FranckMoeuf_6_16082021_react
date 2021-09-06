import { useState } from "react";
import HomeHeader from "../components/HomeHeader"
import PhotographList from "../components/PhotographList";

const Home = () => {
    const [selectedTags, setSelectedTags] = useState([]);
    // console.log(selectedTags);
    return (
        <div className="home">
            <HomeHeader selectedTags={selectedTags} setSelectedTags={setSelectedTags}/>
            <PhotographList selectedTags={selectedTags}/>  
        </div>
    )
}

export default Home;