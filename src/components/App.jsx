import { CardList } from './Profile/card';
import cards from '../data/friendList.json'

export const App = () => {
  return (
    <CardList cards={cards}/>
  );
};
