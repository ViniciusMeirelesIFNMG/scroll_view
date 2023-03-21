import { StyleSheet, View, ScrollView } from 'react-native';

import ProductListItem from './ProductListItem';

export default function ProductList({ products }) {
  const renderItem = ( item ) => <ProductListItem product={item} />;

  return (
    <ScrollView contentContainerStyle={styles.listContent}>
      {products.map((item) => (
        <View key={item.id} style={styles.list}>
          {renderItem(item)}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: 10,
    paddingTop: 30,
  },
});

/*
Diferentemente do FlashList, que é uma biblioteca externa, o ScrollView é uma solução nativa do React Native para rolagem de conteúdo. A principal vantagem do ScrollView é a facilidade de uso, pois é uma solução nativa e não é necessário adicionar uma biblioteca externa para utilizá-lo. Além disso, o ScrollView é capaz de lidar com uma grande quantidade de dados sem comprometer o desempenho.

Por outro lado, o FlashList possui uma vantagem em relação ao ScrollView, que é a renderização otimizada de grandes quantidades de dados, que faz com que a lista seja mais rápida e responsiva. O FlashList também é capaz de lidar com grandes quantidades de dados de forma mais eficiente do que o ScrollView.

Portanto, a escolha entre o ScrollView e o FlashList depende das necessidades do projeto. Para listas simples, o ScrollView é uma boa opção, mas para grandes quantidades de dados ou para listas que exigem alta performance, o FlashList pode ser uma melhor escolha.
*/
