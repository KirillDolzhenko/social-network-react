import { createSelector } from 'reselect'

export const userInfoSelector = (state) => {
    return state.profilePage.userInfo
}

export const userInfoSuperSelector = createSelector(userInfoSelector, 
    (userInfo) => {
            return userInfo.filter((el) => true);
    }
)

export const statusSelector = (state) => {
    return state.profilePage.status
}

export const userAuthSelector = (state) => {
    return state.auth
}

export const pageNumberSelector = (state) => {
    return state.usersPage.pageNumber
}

export const pageElementsSelector = (state) => {
    return state.usersPage.pageElements
}

export const pageCurrentSelector = (state) => {
    return state.usersPage.pageCurrent
}

export const pageButtonsSelector = (state) => {
    return state.usersPage.pageButtons
}

export const isLoadingSelector = (state) => {
    return state.usersPage.isLoading
}