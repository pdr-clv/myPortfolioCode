import React from 'react';

import {
  BadgeStyles
} from './badge.styles';

const Badge = (props) => {
  const { badgeText } = props;
    return(
      <BadgeStyles>{badgeText}</BadgeStyles>);
};

export default Badge;