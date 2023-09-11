import { useGlobalContext } from '../../context'
import './topbox.scss'

export const TopBox = () => {
    const { topDealUsers } = useGlobalContext();

  return (
    <div className='topbox'>
        <h1>Top Deals</h1>
        <div className="list">
            {topDealUsers?.map((item) => {
                    const { id, img, username, email, amount } = item;

                    return (
                        <div className="listItem" key={id}>
                            <div className="user">
                                <img src={img} alt='profile'/>
                                <div className="userText">
                                    <span className="username">{username}</span>
                                    <span className="email">{email}</span>
                                </div>
                            </div>
                            <div className="amount">${amount}</div>
                        </div>
                    );
                })
            }
        </div>
    </div>
  )
}
