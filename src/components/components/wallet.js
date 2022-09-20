import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { ethers } from 'ethers';

const Wallet = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [errorMessage, setErrorMessage] = useState(null);
    const [defaultAccount, setDefaultAccount] = useState(null);
    const [userBalance, setUserBalance] = useState(null);
    const [connButtonText, setConnButtonText] = useState('Connect Wallet');

    const connectWalletHandler = () => {
        if (window.ethereum && window.ethereum.isMetaMask) {
            console.log('MetaMask Here!');

            window.ethereum.request({ method: 'eth_requestAccounts' })
                .then(result => {
                    accountChangedHandler(result[0]);
                    setConnButtonText('Wallet Connected');
                    getAccountBalance(result[0]);
                })
                .catch(error => {
                    setErrorMessage(error.message);

                });

        } else {
            console.log('Need to install MetaMask');
            setErrorMessage('Please install MetaMask browser extension to interact');
        }
    }

    // update account, will cause component re-render
    const accountChangedHandler = (newAccount) => {
        setDefaultAccount(newAccount);
        getAccountBalance(newAccount.toString());
    }

    const getAccountBalance = (account) => {
        window.ethereum.request({ method: 'eth_getBalance', params: [account, 'latest'] })
            .then(balance => {
                setUserBalance(ethers.utils.formatEther(balance));
            })
            .catch(error => {
                setErrorMessage(error.message);
            });
    };

    const chainChangedHandler = () => {
        // reload the page to avoid any errors with chain change mid use of application
        window.location.reload();
    }


    // listen for account changes
    window.ethereum.on('accountsChanged', accountChangedHandler);

    window.ethereum.on('chainChanged', chainChangedHandler);

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title style={{ color: "black" }}>Meta Mask Wallet</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <button style={{ width: "100%" }} onClick={connectWalletHandler}>{connButtonText}</button>
                    <p className='my-3'>Address : {defaultAccount}</p>
                    <p className='my-3'>Balance : {userBalance}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary " className="bg-danger" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <div className="row d-flex justify-content-center align-items-center" onClick={handleShow}>
                <div className="col-lg-3 mb30 mx-1">
                    <span className="box-url">
                        <span className="box-url-label">Most Popular</span>
                        <img src="./img/wallet/1.png" alt="" className="mb20" />
                        <h4>Metamask</h4>
                        <p>Start exploring blockchain applications in seconds.  Trusted by over 1 million users worldwide.</p>
                    </span>
                </div>
            </div>
        </>
    )
};
export default Wallet;