import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";


const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [isConnected, setIsConnected] = useState(false);
    const [selectedNft, setSelectedNft] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.state && location.state.selectedNft) {
            setSelectedNft(location.state.selectedNft);
        }
    }, [location]);

    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleConnect = () => {
        setIsConnected(true);
        navigate("/collection");
    };

    const open = Boolean(anchorEl);
    const id = open ? "account-dropdown" : undefined;

    return (
        <>
            <header className="p-4 bg-white shadow-md">
                <div className="flex flex-col items-start md:flex-row md:justify-between md:items-center">

                    <div className="font-extrabold">
                        <Link
                            to="/"
                            className="text-2xl no-underline text-black"
                        >
                            MARKETPLACE
                        </Link>
                    </div>
                    <div className="mt-4 md:mt-0">
                        <Button
                            className="btn-connectwallet"
                            variant="outlined"
                            size="medium"
                            color="inherit"
                            onClick={isConnected ? handleOpen : handleConnect}
                            aria-describedby={id}
                        >
                            {isConnected ? "Account" : "Connect Wallet"}
                        </Button>
                    </div>
                </div>
            </header>
            {isConnected && (
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: "top",
                        horizontal: "center",
                    }}
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "center",
                    }}
                >
                    <div className="dropdown-content">
                        <div className="flex items-center mb-4 mt-2">
                            <img
                                src="/Ellipse 431.png"
                                alt="Profile"
                                className="rounded-full w-10 h-10 mr-4"
                            />
                            <div className="flex items-center">
                                <p className="text-sm font-extralight mr-2">STV6Q...4Z7WD</p>
                                <button
                                    className="icon-button"
                                    onClick={() => console.log("Icon button clicked!")}
                                    aria-label="Vector Button"
                                >
                                    <img src="/Vector.png" alt="Action" />
                                </button>
                                <button
                                    className="close-button"
                                    onClick={handleClose}
                                    aria-label="Close Button"
                                >
                                    <img src="/Subtract.png" alt="Close" />
                                </button>
                            </div>
                        </div>
                        <Typography variant="caption" align="left" className="title">
                            In your wallet
                        </Typography>
                        <Typography variant="h6" align="left" className="wallet-balance">
                            0.129 BTC
                        </Typography>
                        <Divider />
                        <Typography variant="h6" align="center" className="nfts-header">
                            Your NFTs
                        </Typography>

                        {selectedNft ? (
                            <div className="flex justify-center items-center mt-4">
                                <img
                                    src={selectedNft.image}
                                    alt={selectedNft.title}
                                    className="rounded-lg max-w-[150px] h-[150px]"
                                />
                            </div>
                        ) : (
                            <Typography align="center" className="nfts-description">
                                You don’t own any NFTs yet
                            </Typography>
                        )}
                        <div className="text-center shopping-btn">
                            {!selectedNft && (
                                <button className="bg-black text-white font-medium py-2 px-6 rounded-full btn">
                                    Start shopping
                                </button>
                            )}
                        </div>
                    </div>
                </Popover>
            )}
        </>
    );
};

export default Header;
