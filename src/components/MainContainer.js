import React from 'react'
import '../styles/MainContainer.css'
import SideBar from './SideBar'
import EmailContainer from './EmailContainer'
// import ComposeForm from './ComposeForm'

const MainContainer = () => {
    return (
        <>
            <main>
                <SideBar />
                <EmailContainer />
            </main>
        </>
    )
}

export default MainContainer
