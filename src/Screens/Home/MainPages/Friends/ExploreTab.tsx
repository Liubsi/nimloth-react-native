import React, { useState } from 'react';
import { View } from 'react-native';
import { Tab, TabView } from '@rneui/themed';

// TabView.Items
type ExploreTabProps = {
  MyFriendsView: any;
  ExploreView: any;
};

const ExploreTab = () => {
  const [index, setIndex] = useState(0);

  return (
    <>
      <View
        style={{
          borderRadius: 50,
          marginRight: 20,
          marginLeft: 20,
          marginTop: 10,
          marginBottom: 10,
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
        {/* <MyFriendsView />
      <ExploreView /> */}
        <TabView.Item style={{ backgroundColor: 'black', width: '100%' }} />
        <TabView.Item style={{ backgroundColor: 'blue', width: '100%' }} />
      </TabView>
    </>
  );
};

export default ExploreTab;
