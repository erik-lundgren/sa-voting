import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Title from '../utility/titles';
import { SuccessButton } from '../utility/Buttons';
import { Container, ButtonContainer } from '../utility/Container';
import Card from './Card';

const VoteComplete = ({ cards, startOver, options }) => {
  const VoteButton = styled(SuccessButton)`
        display: block;
        text-align: center;
   `;

  const shownCards = cards.filter(card => options[card.id]);

  return (
    <div>
      <Container>
        <Title>Results:</Title>
        {shownCards.map(card =>
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            options={options[card.id]}
          />
        )}
      </Container>
      <ButtonContainer>
        <VoteButton onClick={startOver}>Start over</VoteButton>
      </ButtonContainer>
    </div>
  );
};

VoteComplete.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      options: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          id: PropTypes.string.isRequired
        }).isRequired
      ).isRequired
    }).isRequired
  ).isRequired
};

export default VoteComplete;
