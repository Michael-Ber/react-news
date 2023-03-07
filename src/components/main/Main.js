import CurrentNews from "../current-news/CurrentNews";
import Popular from "../popular/Popular";
import './main.scss';


const Main = () => {
    return (
        <section className="app-main">
            <div className="app-main__left">
                <CurrentNews />
            </div>
            <div className="app-main__right">
                <Popular />
            </div>

        </section>
    )
}

export default Main;