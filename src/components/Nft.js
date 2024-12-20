import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import './nft.css';
import Typography from '@mui/material/Typography';

const cardData = [
    {
        image: "/image 8.png",
        title: "Night Is Coming",
        price: "0.14 BTC",
    },
    {
        image: "/img 9.png",
        title: "With the Star",
        price: "0.14 BTC",
    },
    {
        image: "/imag10.png",
        title: "Summer",
        price: "0.14 BTC",
    },
    {
        image: "/image 11.png",
        title: "Quiet",
        price: "0.14 BTC",
    },
    {
        image: "/image 12.png",
        title: "Travel",
        price: "0.14 BTC",
    },
    {
        image: "/image 13.png",
        title: "The Rain",
        price: "0.14 BTC",
    },
];

export default function Nft() {
    const navigate = useNavigate();

    const handleBuy = (nft) => {
        navigate('/connecttowallet', { state: { selectedNft: nft } }); // Pass NFT state to the next route
    };

    return (
        <div className="font-extrabold sm:mx-16 mx-8">
            <p className="text-2xl text-left mt-20 mb-5">NFTs</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
                {cardData.map((card, index) => (
                    <Card className="custom-card" key={index}>
                        <div className="relative">
                            <CardMedia
                                className="card-media img m-5"
                                image={card.image}
                                title={card.title}
                                sx={{ height: 200 }}
                            />
                            <button
                                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black text-normal px-4 py-2 rounded-full shadow-lg btn-buy"
                                onClick={() => handleBuy(card)} // Pass selected card to the handleBuy function
                            >
                                {`Buy-->`}
                            </button>
                        </div>
                        <CardContent>
                            <div className="flex justify-between items-center mb-4 mx-2 ">
                                <Typography gutterBottom variant="h5" component="div">
                                    {card.title}
                                </Typography>
                                <Button className="btn-card">{card.price}</Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
