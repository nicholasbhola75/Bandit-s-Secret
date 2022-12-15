import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from 'react-icons/io';
export const SidebarItems = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'My Manga',
        path: '/mymanga',
        icon: <AiIcons.AiOutlineBook/>,
        cName: 'nav-text'
    },
    {
        title: 'Settings',
        path: '/settings',
        icon: <AiIcons.AiOutlineSetting/>,
        cName: 'nav-text'
    },
    {
        title: 'Login',
        path: '/loginpage',
        icon: <AiIcons.AiOutlineSetting/>,
        cName: 'nav-text'
    }
]