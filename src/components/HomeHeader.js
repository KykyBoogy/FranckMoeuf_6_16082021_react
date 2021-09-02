import Tags from './Tags';
import Logo from './Logo';

const HomeHeader = ({selectedTags, setSelectedTags}) => {

    return (
        <header className="header">
            <Logo />
            <Tags selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
            <h2 className="header__title">Nos photographes</h2>
        </header>
    );

}

export default HomeHeader;
