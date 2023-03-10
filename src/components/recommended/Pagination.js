import Arrow from '../arrow/Arrow';
import { returnPaginationRange } from '../utils/returnPaginationRange';

const Pagination = () => {

    console.log(returnPaginationRange(12,1, 100, 1))
    return (
        <ul className="app-recommended__pagination">
            <li className="app-recommended__prev">
                <Arrow  color="#e0e0e0" rotate="180deg"/>
            </li>
            <li className="app-recommended__nums">
                {/* {paginationElements} */}
            </li>
            <li className="app-recommended__next">
                <Arrow  color="#f3692e"/>
            </li>
        </ul>
    )
}

export default Pagination;


