import React, { useState } from 'react';
import { View } from 'react-native';
import { Tab, TabView } from '@rneui/themed';

type ExploreTabProps = {
  children: React.ReactNode[];
};

const ExploreTab = ({ children }: ExploreTabProps) => {
  const [index, setIndex] = useState(0);

  return (
    <>
      <View
        style={{
          borderRadius: 50,
          marginRight: 20,
          marginLeft: 20,
          marginTop: 10,
          marginBottom: 20,
          overflow: 'hidden',
        }}
      >
        <Tab
          value={index}
          onChange={(e) => setIndex(e)}
          containerStyle={{ backgroundColor: '#EBEFF1' }}
          disableIndicator
          variant='primary'
        >
          <Tab.Item
            title='My friends'
            titleStyle={(active) => ({
              color: active ? '#404AFF' : '#9395A5',
              fontFamily: 'Urbanist',
              fontSize: 14,
            })}
            containerStyle={{ backgroundColor: 'EBEFF1' }}
            buttonStyle={(active) => ({
              borderColor: '#EBEFF1',
              borderWidth: 8,
              backgroundColor: active ? '#FFFFFF' : '#EBEFF1',
              borderRadius: 50,
            })}
            variant='primary'
          />
          <Tab.Item
            title='Explore'
            titleStyle={(active) => ({
              color: active ? '#404AFF' : '#9395A5',
              fontFamily: 'Urbanist',
              fontSize: 14,
            })}
            containerStyle={{ backgroundColor: 'EBEFF1' }}
            buttonStyle={(active) => ({
              borderColor: '#EBEFF1',
              borderWidth: 8,
              backgroundColor: active ? '#FFFFFF' : '#EBEFF1',
              borderRadius: 50,
            })}
          />
        </Tab>
      </View>
      <TabView value={index} onChange={setIndex} disableTransition>
        {children.map((child, index) => {
          return <TabView.Item style={{ width: '100%' }}>{child}</TabView.Item>;
        })}
      </TabView>
    </>
  );
};

export default ExploreTab;
