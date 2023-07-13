import React, {useState} from 'react';
import {Box, Icon, Heading} from 'native-base';
import {Ionicons} from '@expo/vector-icons';

export function Header() {
  const onOpenMenu = () => {
    console.log('open');
  };

  const onOpenSearch = () => {
    console.log('search');
  };

  return (
    <Box
      bg="custom.background"
      h="12"
      px="6"
      alignItems="center"
      flexDirection="row">
      <Icon
        as={Ionicons}
        name="menu"
        size={6}
        color="icon.default"
        onPress={onOpenMenu}
      />
      <Heading size="xs" fontSize={18} pl="2" flex="1">
        flooo
      </Heading>
      <Box alignItems="flex-end">
        <Icon
          as={Ionicons}
          name="search"
          color="icon.default"
          size={5}
          onPress={onOpenSearch}
        />
      </Box>
    </Box>
  );
}
