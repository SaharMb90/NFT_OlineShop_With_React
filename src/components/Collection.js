import React from 'react';
import Nft from './Nft';
import './collection.css';

const Collection = () => {
    return (
        <div>
            <div className="flex items-center justify-between p-10 bg-white-100 ml-10">
                <div className="w-1/2 p-4 ">
                    <button className="bg rounded-full mb-4 btn-collection">
                        Trending Now
                    </button>
                    <p className="text-gray-400">Collection</p>
                    <h2 className="text-3xl font-bold mb-4">Night Sky</h2>
                    <p className="text-lg text-gray-700">
                        Welcome to this collection. Here you'll find a curated selection of your NFTs and digital assets. Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo. Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo. Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo.
                    </p>

                    
                    <div className="flex items-center mt-4">
                    <img
                            src="/Rectangle10.png"
                            alt="Profile"
                            className="rounded-xl object-cover max-w-full h-[68px] mr-2"
                        />
                        <p className="text-lg text-gray-600 mr-4">
                            Léa Jacquot
                        </p>
                        
                    </div>
                </div>

                <div className="w-1/2 ">
                    <img
                        src="/Rectangle3.png"
                        alt="Collection"
                        className="p-20 h-auto rounded-lg "
                    />
                </div>
            </div>

            <Nft />
        </div>
    );
};

export default Collection;
