import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import News from '../news/News';
import LatestPost from "../latest/LatestPost";
import Recommended from "../recommended/Recommended";


const Main = () => {
    return (
        <>
            <ErrorBoundary>
                <News/>
            </ErrorBoundary>
            <ErrorBoundary>
                <LatestPost/>
            </ErrorBoundary>
            <ErrorBoundary>
                <Recommended />
            </ErrorBoundary>
        </>
    )
}

export default Main; 