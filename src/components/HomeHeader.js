import Tag from './Tag';
import Logo from './Logo';

const HomeHeader = () => {

    return (
        <header>
            <Logo />
            <Tag />
            <h1 className="header__title">Nos photographes</h1>
        </header>
    );

}


export default HomeHeader;
