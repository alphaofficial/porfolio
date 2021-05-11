import React, { FC } from 'react'

export const ProfilePicture: FC = () => {
    return(
        <div className="mx-auto w-full">
            <img className="h-20 w-20 rounded-full ring-2 ring-blue align-center" src="https://avatars.githubusercontent.com/u/42344171?v=4" alt="Albert"></img>
        </div>
    )
}