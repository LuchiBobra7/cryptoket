import React, { FC, useEffect, useState } from 'react'
import { ethers } from 'ethers'

declare global {
  interface Window {
    ethereum: any
  }
}

export type AppContextInterface = {
  connectWallet: () => void
  currentAccount?: string | null
}

export const UserContext = React.createContext<AppContextInterface | null>(null)

export const UserProvider: FC = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState<string | null>(null)
  useEffect(() => {
    connectWallet()
  }, [])
  const connectWallet = async () => {
    try {
      if (!window?.ethereum) return alert('Please install MetaMask.')
      else {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        await provider.send('eth_requestAccounts', [0])
        const signer = provider.getSigner()
        const walletAddress = await signer.getAddress()

        if (!!walletAddress?.length) {
          setCurrentAccount(walletAddress)
        } else {
          console.log('No accounts found')
        }
      }
    } catch (error) {
      console.log(error)

      //throw new Error('No ethereum object')
    }
  }

  return (
    <UserContext.Provider
      value={{
        connectWallet,
        currentAccount,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
