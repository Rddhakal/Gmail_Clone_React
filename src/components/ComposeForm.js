import React from 'react'
import '../styles/ComposeForm.css'
import { Button } from '@material-ui/core'
import ClearOutlinedIcon from '@material-ui/icons/ClearOutlined';

const ComposeForm = () => {
    return (
        <>
            <form action="" className="compose_form">
                <div className="compose_form_header">
                    <h1 className="title">New Message</h1>
                    <ClearOutlinedIcon />
                </div>
                <div className="form_body">
                    <input type="text" className="to" placeholder="To" />
                    <input type="text" className="subject_input" placeholder="Subject" />
                    <textarea className="message_input" placeholder="Message"></textarea>
                    <div className="form_footer">
                        <Button variant="contained" color="Primary">Send</Button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default ComposeForm
