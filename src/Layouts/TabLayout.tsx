import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { Calendar } from '../Calendar/Calendar';

export const TabLayout: React.FC = () => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = (tab: string) => {
        if(activeTab !== tab) setActiveTab(tab);
    }

    return (
    <>
        <Nav tabs>
            <NavItem>
                <NavLink
                    className={classnames({ active: activeTab === '1'})}
                    onClick={() => { toggle('1'); }}
                >
                    My current regimen
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink
                    className={classnames({ active: activeTab === '2'})}
                    onClick={() => { toggle('2'); }}
                >
                    Add regimen
                </NavLink>
            </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
                <Calendar />
            </TabPane>
            <TabPane tabId="2">
                <div>FOOOO</div>
            </TabPane>
        </TabContent>
    </>
    );
};
