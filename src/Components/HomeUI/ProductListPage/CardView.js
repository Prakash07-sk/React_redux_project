import { Card  } from 'react-bootstrap';
import {AiOutlineHeart} from 'react-icons/ai';

export default (props) => {
    const { images, title, description, price, rating } = props;
    return (
        <>
            <Card className='cardview'>
                <Card.Img className='cardview__img' variant="top" src={images[0]} />
                <div
                    variant="outline-primary"
                    className="cardview__img-like-btn position-absolute top-0 end-0 m-2"
                >
                    <AiOutlineHeart />
                </div>
                <Card.Body>
                    <Card.Title className='cardview__title'>{title}</Card.Title>
                    <Card.Text>
                        <div className='cardview__description'>
                            {description.substring(0, 60)}{description.length > 60 && '...'}
                        </div>

                        <div className='cardview__price'>
                            {price}
                        </div>
                        <div className='cardview__ratting'>
                            {Array.from({ length: 5 }).map((_, index) => {
                                return (
                                    <span
                                        key={index}
                                        className={index < rating ? 'starfilled' : 'star'}
                                    >
                                        &#9733;
                                    </span>
                                );
                            })}
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}