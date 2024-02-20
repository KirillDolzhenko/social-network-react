let objectFollowToggle = (state, action) => {
    return {
        ...state,
        isFollowing: (state.isFollowing.some(el => el == action.id )
                                    ? state.isFollowing.filter(el => el != action.id)
                                    : [...state.isFollowing, action.id])
        };
} 

export default objectFollowToggle