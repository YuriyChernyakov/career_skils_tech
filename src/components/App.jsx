import { CardList } from './Profile/card';
import cards from '../data/friendList.json';
import { useEffect, useState } from 'react';
import { PROFILE_ID } from '../constants/consts';

const FRIENDS_KEY = 'friends';
const FOLLOWS_KEY = 'follows';


export const App = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const lsFriends = getFriends();
    if (lsFriends.length > 0) {
      setFriends(lsFriends);
    } else {
      localStorage.setItem(FRIENDS_KEY, JSON.stringify(cards));
      setFriends(cards)
    }
  }, []);

  const getFriends = () => {
    return JSON.parse(localStorage.getItem(FRIENDS_KEY)) || []
  }

  const handleFollow = (id, isFollowAlredy = false) => {
    if (isFollowAlredy) {
      const preparedUsers = friends.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            followers: item.followers -= 1,
            followersID: item?.followersID ? item.followersID.filter((str) => str !== PROFILE_ID) : []
          }
        }

        return item
      });

      return setFollows(preparedUsers);
    }

    const preparedUsers = friends.map((item) => {
      if(item.id === id) {
        return  {
          ...item,
          followers: item.followers += 1,
          followersID: item?.followersID ? [...item.followersID, PROFILE_ID] : [PROFILE_ID]
        }
      }

      return item
    });

    setFollows(preparedUsers);
  };

  const setFollows = (preparedData) => {
    if (preparedData === null || preparedData === undefined) return false;

    setFriends(preparedData);

    localStorage.setItem(FRIENDS_KEY, JSON.stringify(preparedData));
  }

  return (
    <CardList
      handleFollow={handleFollow}
      cards={friends}
    />
  );
};
