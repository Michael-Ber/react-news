import { HandySvg } from "handy-svg";
import arrow from './arrow.svg';

const Prev = ({color, rotate=0, onClick}) => {
    return (
        <HandySvg 
            onClick = {onClick}
            src={arrow}
            width="20"
            height="20"
            style={{transform: `rotate(${rotate})`, stroke: color, cursor: 'pointer'}}
            />
    )
}

export default Prev;