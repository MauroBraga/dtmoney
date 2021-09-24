import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import Modal from 'react-modal';
import { useState } from 'react';
import NewTransactionModal from './components/NewTransactionModal';

import { GlobalStyle } from './styles/global';
import { TransactionsContext } from './TransactionsContext';

Modal.setAppElement('#root');

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
    
    function handleOpenNewTransactionModalOpen(){
        setIsNewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModalOpen(){
        setIsNewTransactionModalOpen(false);
    }

  return (
    <TransactionsContext.Provider value={[]}>
      <GlobalStyle />
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModalOpen} />
      <Dashboard/>

      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModalOpen}/>

    </TransactionsContext.Provider>
  );
}