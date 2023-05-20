import React, {useState} from 'react';
import {Button, Layout} from 'antd';
import {GithubOutlined} from '@ant-design/icons';
import { getFancyColorsStyle } from './colorPalette';

const {Footer} = Layout;

export default function FooterContent() {
    const [isHover, setIsHover] = useState(false);
    return (<Footer style={
        {textAlign: 'center'}
    }>
        made with next.js - by Marcus Brandstaetter ©2023
        <a href={"https://github.com/techfreaque/my-next-js-page"}
            target="_blank"
            style={
                {marginLeft: "10px"}
            }
            onMouseEnter={
                () => setIsHover(true)
            }
            onMouseLeave={
                () => setIsHover(false)
        }>

            <Button icon={
                (<GithubOutlined/>)
            }>
                Fork this page on GitHub
            </Button>
            <span style={
                {
                    marginLeft: "10px",
                    ...getFancyColorsStyle(isHover)
                }
            }> {"leave me a star while you're there "} </span>
        </a>

    </Footer>);
}
