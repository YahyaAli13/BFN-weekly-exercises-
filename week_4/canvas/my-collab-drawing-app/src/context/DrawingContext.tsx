import React, {createContext, useState, useContext, ReactNode} from 'react';

type DrawingContextType = {
    brushSize: number;
    color: string;
    setBrushSize: (size: number)=> void;
    setColor: (color: string) => void;
};

export const DrawingContext = createContext<DrawingContextType | undefined>(undefined);


export const DrawingProvider: React.FC<{children: ReactNode}> = ({children}) =>{
    const [brushSize, setBrushSize] = useState<number>(5);
    const [ color, setColor] = useState<string>('#000000');

    return(
        <DrawingContext.Provider value={{brushSize, color, setBrushSize, setColor}}>
            {children}
        </DrawingContext.Provider>
    );
};

export const useDrawing = () => {
    const context = useContext(DrawingContext);
    if(!context){
        throw new Error('useDrawing must be used within a DrawingProvider')
    }
    return context;
}
