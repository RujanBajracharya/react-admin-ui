import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../context'
import './menu.scss'

export const Menu = () => {
  const { menu } = useGlobalContext();
  return (
    <div className='menu'>
      {
        menu.map((menuItem) => {
          const { id, title, listItems } = menuItem;

          return(
            <div className="item" key={id}>
              <span className="title">{title}</span>
              {
                listItems.map((item) => {
                  const {id, title, url, icon} = item;

                  return (
                    <Link className="listItem" to={url} key={id}>
                      <img src={icon} alt="" />
                      <span className="listItemTitle">
                        {title}
                      </span>
                    </Link>
                  );
                })
              }
            </div>
          );
        })
      }
    </div>
  )
}
