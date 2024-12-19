

import React from 'react';

const ConnectToWallet = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen connecttowallet-bg">
            <h1 className="text-3xl font-bold mb-12">Choose The Wallet To Connect</h1>
            <div className="flex flex-row space-x-4">
                <div className="bg-gray-100 p-10">wallet1</div>
                <div className="bg-gray-100 p-10">wallet2</div>
                <div className="bg-gray-100 p-10">wallet3</div>
                <div className="bg-gray-100 p-10">wallet4</div>
            </div>
        </div>

    );
};

export default ConnectToWallet;
