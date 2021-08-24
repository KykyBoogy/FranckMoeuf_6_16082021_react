import Tag from './Tag';
import Logo from './Logo';

const HomeHeader = () => {

    return (
        <header className="header">
            <Logo />
            <Tag />
            <h2 className="header__title">Nos photographes</h2>
        </header>
    );

}

export default HomeHeader;
