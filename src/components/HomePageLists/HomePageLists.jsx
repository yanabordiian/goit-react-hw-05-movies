import { Link, useLocation } from 'react-router-dom';
import css from './HomePageLists.module.css';

export default function HomePageLists({ dataList }) {
    const location = useLocation();

    return (
        <ul className={css.lists}>
    {dataList.map(({name,title,id})=>(
    <li key={id}>
     <Link state={{ from: location }} to={`/movies/${id}`}>
     <p className={css.text}> {name && name} {title && title} </p>
    </Link></li>
    ))}
</ul>
    )
}