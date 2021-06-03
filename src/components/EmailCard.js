import React from 'react'
import '../styles/EmailCard.css'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import CheckBoxOutlineBlankOutlinedIcon from '@material-ui/icons/CheckBoxOutlineBlankOutlined';
import { Button } from '@material-ui/core'

const EmailCard = ({ senderName, message, date }) => {
    return (
        <>
            <div className="email_card">
                <div className="email_card_left">
                    <Button>
                        <CheckBoxOutlineBlankOutlinedIcon />
                    </Button>
                    <Button>
                        <StarBorderOutlinedIcon />
                    </Button>
                    <p className="sender_name">{senderName}</p>
                </div>
                <div className="email_card_center">
                    <p className="message">{message}</p>
                </div>
                <div className="email_card_right">
                    <p className="date">{date}</p>
                </div>
            </div>
        </>
    )
}

export default EmailCard
