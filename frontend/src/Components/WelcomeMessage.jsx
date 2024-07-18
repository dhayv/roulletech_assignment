// WelcomeMessage.js
import React from 'react';
import { Container, Card } from 'react-bootstrap';

const WelcomeMessage = () => {
  return (
    <Container className="text-center my-5">
      <Card className="bg-dark text-white">
        <Card.Body>
          <Card.Title>Welcome to Recipe Meals</Card.Title>
          <Card.Text>
            Discover a variety of delicious recipes tailored to your preferences. Browse categories and find your next favorite meal!
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default WelcomeMessage;
