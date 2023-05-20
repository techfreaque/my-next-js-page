import React from 'react';
import {
    Button,
    Menu,
    Space,
    Tooltip
} from 'antd';
import {
    AppstoreOutlined,
    AudioOutlined,
    GithubOutlined,
    HistoryOutlined,
    RocketOutlined
} from '@ant-design/icons';
import Link from 'next/link';
import logo from "./logo.png"
import Image from 'next/image';
import {pageColors} from '../colorPalette';
import {contactEmailSubject, githubProfileURL, myEmailAddress} from '../constantsAboutMe';

export const titleIds = {
    aboutMe: "about-me",
    myProjects: "my-projects",
    myResume: "my-resume",
    myServices: "my-services",
    getInTouch: "get-in-touch"
}

export default function NavBar() {
    return (
        <div style={
            {
                position: "fixed",
                width: "100%",
                top: "0",
                background: "#fff",
                zIndex: 2,
                borderBottom: "1px solid rgba(5, 5, 5, 0.06)"
            }
        }>
            <div style={
                {
                    display: 'flex',
                    alignItems: 'center',
                    maxWidth: "1500px",
                    margin: "auto"
                }
            }>
                <a href={`/#`}>
                    <div style={
                        {
                            color: "#000",
                            fontSize: "40px",
                            marginRight: "20px",
                            marginLeft: "20px",
                            height: "50px"
                        }
                    }>
                        <Image src={logo}
                            alt='A42.ch'
                            style={
                                {
                                    height: "95%",
                                    width: "auto",
                                    margin: "auto"
                                }
                            }
                        />
                    </div>
                </a>
                <div style={
                    { 
                        width: "calc(100% - 330px)"
                    }
                }>
                    <Menu theme="light" mode="horizontal"
                        // defaultSelectedKeys={
                        //     ['about']
                        // }
                        selectedKeys={
                            []
                        }
                        style={ {borderBottom: "none"}}
                        items={
                            [
                                {
                                    label: (
                                        <MenuItem itemName="About Me"
                                            ankerId={
                                                titleIds.aboutMe
                                            }
                                            icon={
                                                (
                                                    <AudioOutlined/>)
                                            }/>

                                    ),
                                    key: titleIds.aboutMe,
                                }, {
                                    label: (
                                        <MenuItem itemName="My Projects"
                                            ankerId={
                                                titleIds.myProjects
                                            }
                                            icon={
                                                (
                                                    <AppstoreOutlined/>)
                                            }/>

                                    ),
                                    key: titleIds.myProjects,
                                }, {
                                    label: (
                                        <MenuItem itemName="My Resume"
                                            ankerId={
                                                titleIds.myResume
                                            }
                                            icon={
                                                (
                                                    <HistoryOutlined/>)
                                            }/>
                                    ),
                                    key: titleIds.myResume,
                                },
                            ]
                        }/>
                </div>
                <div style={
                    { // display: "block",
                        marginLeft: "auto",
                        width: "180px"
                    }
                }>
                    <Space>
                        <Tooltip title="It's easy! Just click and shoot me a message">
                            <Button 
                                href={
                                    `mailto:${myEmailAddress}?subject=${contactEmailSubject}`
                                }
                                size='large'
                                style={
                                    {color: pageColors.primary}
                                }
                                icon={
                                    (
                                        <RocketOutlined/>)
                            }>
                                Say Hello
                            </Button>
                        </Tooltip>
                        <Tooltip title="Follow me on GitHub">
                            <Button size='large' target='blank'
                                href={githubProfileURL}
                                icon={
                                    (
                                        <GithubOutlined/>)
                            } />
                    </Tooltip>
                </Space>
            </div>
        </div>
    </div>
    );
}


function MenuItem({itemName, ankerId, icon}) {
    return (
        <a href={
            `/#${ankerId}`
        }>
            <div> {icon}
                <span style={
                    icon ? {
                        marginLeft: "5px"
                    } : {}
                }>
                    {itemName}</span>
            </div>
        </a>
    )
}
