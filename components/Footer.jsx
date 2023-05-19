import React from 'react';
import {Button, Layout} from 'antd';
import {GithubOutlined} from '@ant-design/icons';

const {Footer} = Layout;

export default function FooterContent() {
    return (
        <Footer style={
            {textAlign: 'center'}
        }>
            made with next.js - by Marcus Brandstaetter ©2023
            <a href={"https://github.com/techfreaque/my-next-js-page"}
                target="_blank" style={{marginLeft: "10px"}} >

                <Button icon={
                    (
                        <GithubOutlined/>)
                }>
                    Fork this page on GitHub
                </Button>
            </a>
        </Footer>
    );
}
