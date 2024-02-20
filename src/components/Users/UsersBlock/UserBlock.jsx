import React from "react"
import c_css from "./UserBlock.module.css"
import User from "./User/User"
import Loading from "./Loading/Loading"
import imgLoading from "../../../redux/images/loading.gif"


const UserBlock = ({users, isLoading, isFollowing, followShift, unfollowShift}) => {

    if (!isLoading) {
        let list = users.map(el => <User 
                                            name={el.name}
                                            img={el.photos.small}
                                            status={el.status}
                                            followed={el.followed}
                                            key={el.id}
                                            id={el.id}
                                            isFollowing={isFollowing.some(elem => elem == el.id)}
                                            followShift={followShift}
                                            unfollowShift={unfollowShift}
                                        />)
        return (<ul className={c_css.userBlock}>
                {list}
            </ul>)
    } else {
        return <Loading />
    }

}

export default UserBlock;
