import React from 'react'
import '../styles/Header.css'
import logo from '../images/logo.png'
import { Button } from '@material-ui/core'
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import AppsOutlinedIcon from '@material-ui/icons/AppsOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

const Header = () => {
    return (
        <>
        <header>
            <div className="header_left">
            <Button>
            <MenuOutlinedIcon />
            </Button>
                <img src={logo} alt="" className="logo" />
            </div>
            <div className="search_container">
            <Button>
            <SearchOutlinedIcon />
            </Button>
                <input type="text" name="" id="" placeholder="Search in Gmail" />
                <Button>
                <ArrowDropDownOutlinedIcon />
                </Button>
            </div>
            <div className="header_right">
            <Button>
                <HelpOutlineOutlinedIcon />
            </Button>
            <Button>
                <SettingsOutlinedIcon />
            </Button>
            <Button>
                <AppsOutlinedIcon />
            </Button>
            <Button>
                <AccountCircleOutlinedIcon />
            </Button>
            </div>
        </header>
        </>
    )
}

export default Header
