import React from 'react'
import '../styles/EmailContainerType.css'
import InboxOutlinedIcon from '@material-ui/icons/InboxOutlined';
import GroupOutlinedIcon from '@material-ui/icons/GroupOutlined';
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';

const EmailContainerType = () => {
    return (
        <>
            <div className="email_container_type">
                <div className="email_container_type_option active">
                    <InboxOutlinedIcon />
                    <p>Primary</p>
                </div>
                <div className="email_container_type_option">
                    <GroupOutlinedIcon />
                    <p>Social</p>
                </div>
                <div className="email_container_type_option">
                    <LabelOutlinedIcon />
                    <p>Promotions</p>
                </div>
            </div>
        </>
    )
}

export default EmailContainerType