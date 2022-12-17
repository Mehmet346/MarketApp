import React from "react";


const PracticeContext = React.createContext();

const PracticeProvider = ({children}) => {
    const [kekstra, setKekstra] = React.useState(0);
    const [kekstraStock, setkekstraStock] = React.useState(25);
    const kekstraPrice = 3.25;

    const [cubukKraker, setCubukKraker] = React.useState(0);
    const [cubukKrakerStock, setcubukKrakerStock] = React.useState(25);
    const cubukKrakerPrice = 5;

    const [sut, setSut] = React.useState(0);
    const [sutStock, setsutStock] = React.useState(25);
    const sutPrice = 12;

    const [amount, setAmount] = React.useState(150);
    const [AdminAmount, setAdminAmount] = React.useState(0);
    

    return(
       <PracticeContext.Provider value={{
              kekstra, kekstraPrice, kekstraStock, setKekstra,setkekstraStock, cubukKraker, cubukKrakerStock, cubukKrakerPrice, setCubukKraker, setcubukKrakerStock, sut,sutStock, sutPrice, setSut, setsutStock, amount, setAmount, AdminAmount, setAdminAmount
       }}>
              {children}
       </PracticeContext.Provider>
    );
};

export {PracticeContext,PracticeProvider}