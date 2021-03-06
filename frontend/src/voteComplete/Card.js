import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';

import { SubTitle } from '../utility/titles';

const Margined = styled.div`
  margin-left: 10px;
  font-weight: ${props => (props.active ? 700 : 'normal')};
  color: ${props => (props.active ? 'aqua' : '#fff')};
`;

const CardContainer = styled.div`margin-top: 1em;`;

const Card = ({
  options,
  title,
  id,
  updateVotes,
  deleteOption,
  updateOptionName,
  addOption
}) => {
  return (
    <CardContainer>
      <SubTitle>
        {title}
      </SubTitle>
      {_.map(options, option =>
        <Margined active={option.active} key={option.name}>
          {option.name}: {option.votes} ({option.users.map(
            (u, userIndex, arr) =>
              <span key={u.name}>
                {u.name} {u.votes + (userIndex < arr.length - 1 ? ', ' : '')}
              </span>
          )})
        </Margined>
      )}
    </CardContainer>
  );
};

Card.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      votes: PropTypes.number.isRequired,
      users: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          votes: PropTypes.number.isRequired
        })
      ).isRequired
    }).isRequired
  ).isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default Card;
