import React from 'react';
import {newInversionista} from '../assets/data_inversionistas'
import {newProDucto} from '../assets/data_producto'
import {newNumLev} from '../assets/data_levantamiento'
import {newTipoDoc} from '../assets/data_documento'


interface SelectionContextType {
    selectedOption1: newTipoDoc | newNumLev | newProDucto | newInversionista | null;
    selectedOption2: newTipoDoc | newNumLev | newProDucto | newInversionista | null;
    selectedOption3: newTipoDoc | newNumLev | newProDucto | newInversionista | null;
    selectedOption4: newTipoDoc | newNumLev | newProDucto | newInversionista | null;
    setSelectedOption1: React.Dispatch<React.SetStateAction<newTipoDoc | newNumLev | newProDucto | newInversionista | null>>;
    setSelectedOption2: React.Dispatch<React.SetStateAction<newTipoDoc | newNumLev | newProDucto | newInversionista | null>>;
    setSelectedOption3: React.Dispatch<React.SetStateAction<newTipoDoc | newNumLev | newProDucto | newInversionista | null>>;
    setSelectedOption4: React.Dispatch<React.SetStateAction<newTipoDoc | newNumLev | newProDucto | newInversionista | null>>;
}

export const SelectionContext = React.createContext<SelectionContextType>({
    selectedOption1: null,
    selectedOption2: null,
    selectedOption3: null,
    selectedOption4: null,
    setSelectedOption1: () => {},
    setSelectedOption2: () => {},
    setSelectedOption3: () => {},
    setSelectedOption4: () => {},
});