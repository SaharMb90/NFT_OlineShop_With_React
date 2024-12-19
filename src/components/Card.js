import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import './card.css';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const cardData = [
    {
        image: "/image8.png",
        title: "Night Sky",
        description:
            "Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempor...",
        price:
            "Price Range : 0.12BTC - 0.18BTC",
        profileimgeurl:
            "./Rectangle10.png",
        name:
            "Léa Jacquot"
    },
    {
        image: "/image9.png",
        title: "Feature",
        description:
            "Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempor...",
        price:
            "Price Range : 0.12BTC - 0.18BTC",
        profileimgeurl:
            "./Rectangle12.png",
        name:
            "Julien",
    },
    {
        image: "/image10.png",
        title: "Mother Nature",
        description:
            "Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempor...",
        price:
            "Price Range : 0.12BTC - 0.18BTC",
        profileimgeurl:
            "./Rectangle11.png",
        name:
            "Maria",
    },
];

export default function MediaCard() {
    return (
        <div className='font-extrabold mx-16 mb-10'>
            <p className="text-2xl text-left mt-20 mb-5">Collections</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">

                {cardData.map((card, index) => (
                    <Card className='custom-card' key={index}>
                        <div className="relative">
                            <CardMedia
                                className="m-5 rounded-[30px]"
                                sx={{ height: 227 }}
                                image={card.image}
                                title={card.title}
                            />
                           
                            <Link to="/collection" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <button className="bg-white text-black p-4 rounded-full btn">
                                    Go to Collection
                                </button>
                            </Link>
                        </div>
                        <CardContent>
                            <div className="flex justify-between items-center mb-4 mx-2">
                                <Typography gutterBottom variant="h5" component="div">
                                    {card.title}
                                </Typography>
                                <Button className="btn-card">120NFT</Button>
                            </div>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                {card.price}
                            </Typography>

                            <Typography variant="body2">
                                {card.description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <div className="flex justify-between items-left mb-4 mx-2">
                                <img
                                    src={card.profileimgeurl}
                                    alt={`Profile ${index + 1}`}
                                    className="rounded-sx object-cover max-w-full h-[40px]"
                                />
                                <div className='ml-2'>
                                    <p className="text-xs font-thin">Artist</p>
                                    <p className="text-xs font-txtralight">
                                        {card.name}
                                    </p>
                                </div>
                            </div>
                        </CardActions>
                    </Card>
                ))}
            </div>
        </div>
    );
}
