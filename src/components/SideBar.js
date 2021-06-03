import React from 'react'
import '../styles/SideBar.css'
import SideBarOption from './SideBarOption'
import InboxOutlinedIcon from '@material-ui/icons/InboxOutlined';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import QueryBuilderOutlinedIcon from '@material-ui/icons/QueryBuilderOutlined';
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';
import AddIcon from '../images/add.png';

const SideBar = () => {
    return (
        <>
            <div className="sidebar_container">
                <button className="compose_btn">
                    <img src={AddIcon} alt="" className="add_icon" />
                    <p>Compose</p>
                </button>
                <div className="sidebar_options_container">
                    <SideBarOption name="Inbox" icon={<InboxOutlinedIcon />} />
                    <SideBarOption name="Starred" icon={<StarBorderOutlinedIcon />} />
                    <SideBarOption name="Snoozed" icon={<QueryBuilderOutlinedIcon />} />
                    <SideBarOption name="Sent" icon={<SendOutlinedIcon />} />
                    <SideBarOption name="Draft" icon={<InsertDriveFileOutlinedIcon />} />
                    <SideBarOption name="Trash" icon={<DeleteOutlinedIcon />} />
                    <SideBarOption name="More" icon={<ArrowDropDownOutlinedIcon />} />
                </div>
            </div>
        </>
    )
}

export default SideBar
