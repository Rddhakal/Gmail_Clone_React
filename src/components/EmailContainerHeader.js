import React from 'react'
import '../styles/EmailContainerHeader.css'
import CheckBoxOutlineBlankOutlinedIcon from '@material-ui/icons/CheckBoxOutlineBlankOutlined';
import RefreshOutlinedIcon from '@material-ui/icons/RefreshOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import { Button } from '@material-ui/core'

const EmailContainerHeader = () => {
    return (
        <>
            <div className="email_container_header">
                <Button>
                    <CheckBoxOutlineBlankOutlinedIcon />
                </Button>
                <Button>
                    <RefreshOutlinedIcon />
                </Button>
                <Button>
                    <MoreVertOutlinedIcon />
                </Button>
            </div>
        </>
    )
}

export default EmailContainerHeader
