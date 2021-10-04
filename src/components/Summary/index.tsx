import React, { useContext } from 'react';

import iconeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { TransactionsContext } from '../../TransactionsContext';
import { Container } from './styles';

const Summary: React.FC = () => {
    const { transactions }=useContext(TransactionsContext);
    console.log(transactions);
  
    return (
      <Container>

        {/* 
            OLD version
        <TransactionsContext.Consumer>
            {(data) =>{
                console.log(data);

                return <p>ok</p>
            }}
        </TransactionsContext.Consumer>  */}
          
        <div>
            <header>
                <p>Entradas</p>
                <img src={iconeImg} alt="Entradas" />
            </header>
            <strong>R$1000,00</strong>
        </div>

        <div>
            <header>
                <p>Saídas</p>
                <img src={outcomeImg} alt="Saídas" />
            </header>
            <strong>- R$500,00</strong>
        </div>

        <div className="highlight-background">
            <header>
                <p>Total</p>
                <img src={totalImg} alt="total" />
            </header>
            <strong>R$500,00</strong>
        </div>

      </Container>
  );
}

export default Summary;