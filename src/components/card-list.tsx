import React from 'react';
import {Card, EmptyCard} from './card';
import {FlashList} from '@shopify/flash-list';

export function CardList(props: {data: any[]}) {
  const {data} = props;
  return (
    <FlashList
      data={data}
      renderItem={() => <Card />}
      estimatedItemSize={200}
      ListEmptyComponent={EmptyCard}
    />
  );
}
