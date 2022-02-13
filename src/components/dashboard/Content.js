import React from 'react';
import '../../assets/css/style.css';
import Button from '../common/button/Button';
import Card from '../common/card/Card';
import Food from '../../assets/images/food.png';
import Food1 from '../../assets/images/food1.png';
import Food2 from '../../assets/images/food2.png';
import CardImage from '../common/card/CardImage';
import CardBody from '../common/card/CardBody';
import Container from '../common/Container';

const Content = () => {
  return (
    <Container>
      <div
        id='content'
        className='d-flex flex-wrap flex-column justify-content-center text-center'
      >
        <div>
          <h2>Top 3 Favorite Menu</h2>
        </div>
        <div className='d-flex flex-wrap justify-content-center text-center'>
          <Card style={{ width: '18rem' }}>
            <CardImage src={Food} />
            <CardBody
              title='Daging Panggang'
              text=" Some quick example text to build on the card title
                            and make up the bulk of the card's content."
            >
              <Button text='see more' className='btn-primary' />
            </CardBody>
          </Card>
          <Card style={{ width: '18rem' }}>
            <CardImage src={Food1} />
            <CardBody
              title='Sop Ayam Bakari'
              text=" Some quick example text to build on the card title
                            and make up the bulk of the card's content."
            >
              <Button text='see more' className='btn-primary' />
            </CardBody>
          </Card>
          <Card style={{ width: '18rem' }}>
            <CardImage src={Food2} />
            <CardBody
              title='Hamburger'
              text=" Some quick example text to build on the card title
                            and make up the bulk of the card's content."
            >
              <Button text='see more' className='btn-primary' />
            </CardBody>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export default Content
