import React, { createContext, useContext, useState, type ReactNode } from 'react';

export interface HistoryItem {
    id: string;
    command: string;
    output: ReactNode;
    timestamp: number;
}

interface TerminalContextType {
    history: HistoryItem[];
    addToHistory: (command: string, output: ReactNode) => void;
    clearHistory: () => void;
    inputRef: React.RefObject<HTMLInputElement | null>;
    focusInput: () => void;
    viewMode: 'terminal' | 'gui';
    setViewMode: (mode: 'terminal' | 'gui') => void;
}

const TerminalContext = createContext<TerminalContextType | undefined>(undefined);

export const TerminalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [history, setHistory] = useState<HistoryItem[]>([]);
    const [viewMode, setViewMode] = useState<'terminal' | 'gui'>('terminal');
    const inputRef = React.useRef<HTMLInputElement>(null);

    const addToHistory = (command: string, output: ReactNode) => {
        setHistory(prev => [...prev, {
            id: Math.random().toString(36).substr(2, 9),
            command,
            output,
            timestamp: Date.now()
        }]);
    };

    const clearHistory = () => {
        setHistory([]);
    };

    const focusInput = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    return (
        <TerminalContext.Provider value={{ history, addToHistory, clearHistory, inputRef, focusInput, viewMode, setViewMode }}>
            {children}
        </TerminalContext.Provider>
    );
};

export const useTerminal = () => {
    const context = useContext(TerminalContext);
    if (context === undefined) {
        throw new Error('useTerminal must be used within a TerminalProvider');
    }
    return context;
};
