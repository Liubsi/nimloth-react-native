/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { TabView } from '@rneui/themed';
import {
  TabContainerView,
  TabContainer,
  TabContainerItem,
  TabContainerItemSmall,
} from './styles';

type TabProps = {
  children: React.ReactNode[];
  tabTitles: string[];
  fontSize?: string;
};

const Tabs = ({ children, tabTitles, fontSize }: TabProps) => {
  const [index, setIndex] = useState(0);

  if (children.length !== tabTitles.length) {
    throw new Error('Number of children and tabTitles must match');
  }

  const renderTabs = () => {
    return tabTitles.map((title, index) =>
      fontSize === 'small' ? (
        <TabContainerItemSmall key={index} title={title} />
      ) : (
        <TabContainerItem key={index} title={title} />
      )
    );
  };

  const renderTabViews = () => {
    return children.map((child, index) => (
      <TabView.Item
        key={tabTitles[index]}
        style={{ flex: 1, width: '100%', alignItems: 'center' }}
      >
        {child}
      </TabView.Item>
    ));
  };

  return (
    <>
      <TabContainerView>
        <TabContainer value={index} onChange={(e) => setIndex(e)}>
          {renderTabs()}
        </TabContainer>
      </TabContainerView>
      <TabView
        containerStyle={{ width: '100%' }}
        value={index}
        onChange={setIndex}
        disableTransition
      >
        {renderTabViews()}
      </TabView>
    </>
  );
};

export default Tabs;
