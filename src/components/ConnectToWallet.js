import React from "react";

const ConnectToWallet = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen connecttowallet-bg px-4">
      <h1 className="text-2xl md:text-3xl font-bold mb-8 text-center">
        Choose The Wallet To Connect
      </h1>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <div className="bg-gray-100 p-6 md:p-10 rounded-lg text-center">
          wallet1
        </div>
        <div className="bg-gray-100 p-6 md:p-10 rounded-lg text-center">
          wallet2
        </div>
        <div className="bg-gray-100 p-6 md:p-10 rounded-lg text-center">
          wallet3
        </div>
        <div className="bg-gray-100 p-6 md:p-10 rounded-lg text-center">
          wallet4
        </div>
      </div>
    </div>
  );
};

export default ConnectToWallet;
