import React, { useState } from 'react';
import { TabView } from '@rneui/themed';
import { TabContainerView, TabContainer, TabContainerItem } from './styles';

type TabProps = {
  children: React.ReactNode[];
  tabTitles: string[];
  fontSize?: number;
};

const Tabs = ({ children, tabTitles, fontSize }: TabProps) => {
  const [index, setIndex] = useState(0);

  if (children.length !== tabTitles.length) {
    throw new Error('Number of children and tabTitles must match');
  }

  const renderTabs = () => {
    return tabTitles.map((title, index) => (
      <TabContainerItem
        // TODO: Find a better way to do assign a key
        // eslint-disable-next-line react/no-array-index-key
        key={index}
        title={title}
        titleStyle={(active) => ({
          color: active ? '#404AFF' : '#9395A5',
          fontFamily: 'Urbanist',
          fontSize: fontSize || 14,
        })}
        buttonStyle={(active) => ({
          borderColor: '#EBEFF1',
          borderWidth: 8,
          backgroundColor: active ? '#FFFFFF' : '#EBEFF1',
          borderRadius: 50,
          margin: 0,
          paddingHorizontal: 0,
          paddingVertical: 0,
        })}
      />
    ));
  };

  const renderTabViews = () => {
    return children.map((child, index) => (
      <TabView.Item
        key={tabTitles[index]}
        style={{ width: '100%', alignItems: 'center' }}
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
      <TabView value={index} onChange={setIndex} disableTransition>
        {renderTabViews()}
      </TabView>
    </>
  );
};

export default Tabs;
