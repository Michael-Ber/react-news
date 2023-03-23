import dateChangeToUTC from '../utils/dateChangeToUTC';

const withDate = (WrappedComponent, props) => {
    const {
        utcMonth, 
        utcDate, 
        utcHours, 
        utcMinutes,
        utcNowMonth,
        utcNowDate,
        utcNowHours,
        utcNowMinutes
    } = dateChangeToUTC(props.publishedAt);
    const renderDate = () => {
        if(utcMonth !== utcNowMonth) {
            return <span className="item-app-latest__time">{(utcNowMonth - utcMonth) > 1 && utcNowMonth - utcMonth} {`${(utcNowMonth - utcMonth)>4 ? 'месяцев' : ((utcNowMonth - utcMonth)===1) ? 'месяц' :  'месяца'}`} назад</span>
        }else if(utcMonth === utcNowMonth && utcDate !== utcNowDate) {
            return <span className="item-app-latest__time">{(utcNowDate - utcDate) > 1 && utcNowDate - utcDate} {`${(utcNowDate - utcDate)>4 ? 'дней' : ((utcNowDate - utcDate)===1) ? 'вчера' :  'дня'}`} {(utcNowDate - utcDate) > 1 && 'назад'}</span>
        }else if(utcMonth === utcNowMonth && utcDate === utcNowDate && utcHours !== utcNowHours) {
            return <span className="item-app-latest__time">{(utcNowHours - utcHours) > 1 && utcNowHours - utcHours} {`${(utcNowDate - utcDate)>4 ? 'часов' : ((utcNowDate - utcDate)===1) ? 'час' :  'часа'}`} {(utcNowDate - utcDate) > 1 && 'назад'}</span>
        }
    }
    const date = renderDate();
    return () => {
        return (
            <WrappedComponent date={date} {...props}/>
        )
    }
} 

export default withDate;