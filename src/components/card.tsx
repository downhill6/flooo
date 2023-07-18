import React from 'react';
import {Box, Icon, Text} from 'native-base';
import {Ionicons} from '@expo/vector-icons';

export function EmptyCard() {
  return (
    <Box p="3.5" mx="4" my="1">
      <Box>No Data</Box>
    </Box>
  );
}

export function Card() {
  return (
    <Box bg="custom.white" p="3.5" mx="4" my="1">
      <Box flexDirection="row">
        <Text color="custom.gray" flex="1">
          2023-12-15 12:52:03
        </Text>
        <Icon
          as={Ionicons}
          name="ellipsis-horizontal-sharp"
          color="icon.default"
          size={5}
        />
      </Box>
      <Box>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum veniam
        dignissimos, cumque voluptatem omnis natus minima. Optio consectetur
        necessitatibus nemo eligendi odit! Nemo libero ab quae quam autem, eaque
        dolores.
      </Box>
    </Box>
  );
}
