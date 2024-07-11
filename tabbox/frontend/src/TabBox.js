import React from 'react';
import Tabs from './Tabs';
import TabView from './TabView';

function TabBox({tabs}) {
    // active가 true인 탭을 찾음
    const activeTab = tabs.find(tab => tab.active);
    console.log(activeTab);

    return (
        <div className={'tab-box'}>
            <Tabs tabs={tabs}/>
            <TabView contents={activeTab? activeTab.contents:''}/>
        </div>
    );
}

export default TabBox;