import Pizza from '../../menu-management/category-management/food/pizza.png';
import Fish from '../../menu-management/category-management/food/fish.png';
import Burger from '../../menu-management/category-management/food/burger.png';
import Pasta from '../../menu-management/category-management/food/pasta.png';
import Meat from '../../menu-management/category-management/food/meat.png';
import Salad from '../../menu-management/category-management/food/salad.png';
import Beer from '../../menu-management/category-management/drinks/beer.svg';
import Juices from '../../menu-management/category-management/drinks/juices.svg';
import Wine from '../../menu-management/category-management/drinks/wine.png';
import Tea from '../../menu-management/category-management/drinks/tea.png';
import Coffee from '../../menu-management/category-management/drinks/coffee.png';
import Water from '../../menu-management/category-management/drinks/water.png';
import Cake from '../../menu-management/category-management/desserts/cake.png';
import CupCake from '../../menu-management/category-management/desserts/cup-cake.png';
import IceCream from '../../menu-management/category-management/desserts/ice-cream.png';
import Cookie from '../../menu-management/category-management/desserts/cookie.png';
import Frozen from '../../menu-management/category-management/desserts/frozen.png';
import Brownie from '../../menu-management/category-management/desserts/brownie.png';

export const Categories = [
  { id: 1, name: 'Pizza', image: Pizza, type: 'food' },
  { id: 2, name: 'Fish', image: Fish, type: 'food' },
  { id: 3, name: 'Burger', image: Burger, type: 'food' },
  { id: 4, name: 'Pasta', image: Pasta, type: 'food' },
  { id: 5, name: 'Meat', image: Meat, type: 'food' },
  { id: 6, name: 'Salad', image: Salad, type: 'food' },
  { id: 20, name: 'American', image: Pizza, type: 'food' },
  { id: 21, name: 'Sushi', image: Fish, type: 'food' },
  { id: 22, name: 'French', image: Meat, type: 'food' },
  { id: 23, name: 'Main vegans', image: Pasta, type: 'food' },

  { id: 7, name: 'Wine', image: Wine, type: 'drinks' },
  { id: 8, name: 'Beer', image: Beer, type: 'drinks' },
  { id: 9, name: 'Juices', image: Juices, type: 'drinks' },
  { id: 10, name: 'Tea', image: Tea, type: 'drinks' },
  { id: 11, name: 'Coffee', image: Coffee, type: 'drinks' },
  { id: 12, name: 'Water', image: Water, type: 'drinks' },
  { id: 24, name: 'Coala', image: Beer, type: 'drinks' },
  { id: 25, name: 'Soda', image: Wine, type: 'drinks' },

  { id: 13, name: 'Cake', image: Cake, type: 'desserts' },
  { id: 14, name: 'Cup Cake', image: CupCake, type: 'desserts' },
  { id: 15, name: 'Brownie', image: Brownie, type: 'desserts' },
  { id: 17, name: 'Frozen', image: Frozen, type: 'desserts' },
  { id: 18, name: 'Ice Cream', image: IceCream, type: 'desserts' },
  { id: 19, name: 'Cookie', image: Cookie, type: 'desserts' },
];

export const cuisines = [
  { id: 1, name: 'Italian Food' },
  { id: 2, name: 'Chinese Food' },
  { id: 3, name: 'Asian Food' },
  { id: 4, name: 'Pizza' },
  { id: 5, name: 'Pasta' },
  { id: 6, name: 'American Food' },
  { id: 7, name: 'Seafood' },
  { id: 8, name: 'Spanish Food' },
  { id: 9, name: 'Mexican' },
  { id: 10, name: 'Indian Food' },
  { id: 11, name: 'Latin' },
  { id: 12, name: 'Fish' },
  { id: 13, name: 'Fusion' },
  { id: 14, name: 'Sushi' },
];
