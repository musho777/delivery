import {View, Text, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Category} from '../Components/Category/category';
import {Header} from '../Components/Header/Header';
import {Input} from '../Components/Input/input';
import {MenuBottum} from '../Components/MenuBottum/MenuButtom';
import {MenuCard} from '../Components/MenuCard/MenuCard';
import img from '../images/a.png';
import img1 from '../images/b.png';

export default Menu = () => {
  const data = [
    {title: 'Блюда'},
    {title: 'Напитки'},
    {title: 'Гарниры'},
    {title: 'Закуски'},
  ];
  const product = [
    {title: 'Мясо совощами', price: '80.000', img: img},
    {title: 'Рыба с овощами', price: '120.000', img: img1},
    {title: 'Мясо совощами', price: '80.000', img: img},
    {title: 'Мясо совощами', price: '80.000', img: img},
    {title: 'Рыба с овощами', price: '120.000', img: img1},
    {title: 'Мясо совощами', price: '80.000', img: img},
  ];
  return (
    <View style={{width: '100%',position:'relative',height:'100%'}   }>
      <View style={{paddingHorizontal: 30}}>
        <Header />
        <Text style={styles.title}>Наше меню</Text>
        <Input placeholder="Поиск" />
      </View>
      <ScrollView style = {{height:"80%"}} >
          <View style = {{paddingHorizontal:20,}}>
            <Category data={data} active={0} />
          </View>
          <View style={styles.MenuCard}>
            {product.map((elm, i) => (
              <MenuCard style = {((i%4 ==0 && i!==0 )|| i === 1 ) && 'margin'}  key={i} title={elm.title} price={elm.price} img={elm.img} />
            ))}
          </View>
      </ScrollView>
      <MenuBottum active_page="Home" />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 700,
    fontSize: 34,
    color: '#000000',
    marginTop: 20,
    marginLeft:2,
  },
  MenuCard: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  },
});
