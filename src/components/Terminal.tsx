import React, { useEffect, useState, useRef } from 'react';
import { useTerminal } from '../context/TerminalContext';
import { executeCommand, commands } from '../utils/commands';
import { TerminalLayout } from './TerminalLayout';

export const Terminal: React.FC = () => {
    const { history, addToHistory, clearHistory, inputRef, focusInput, setViewMode } = useTerminal();
    const [input, setInput] = useState('');
    const bottomRef = useRef<HTMLDivElement>(null);
    // Auto-scroll to bottom
    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [history]);

    // Focus input on click anywhere in terminal
    useEffect(() => {
        const handleClick = () => focusInput();
        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    }, [focusInput]);

    const [historyIndex, setHistoryIndex] = useState(-1);
    // Get available commands for autocomplete
    const availableCommands = Object.keys(commands);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            const trimmedInput = input.trim();
            if (!trimmedInput) return;

            if (trimmedInput.toLowerCase() === 'clear') {
                clearHistory();
            } else if (trimmedInput.toLowerCase() === 'gui') {
                setViewMode('gui');
                addToHistory(trimmedInput, <span className="text-terminal-green">Switching to GUI mode...</span>);
            } else {
                const output = executeCommand(trimmedInput);
                addToHistory(trimmedInput, output);
            }
            setInput('');
            setHistoryIndex(-1);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (history.length > 0) {
                const newIndex = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
                setHistoryIndex(newIndex);
                setInput(history[newIndex].command);
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIndex !== -1) {
                const newIndex = historyIndex + 1;
                if (newIndex < history.length) {
                    setHistoryIndex(newIndex);
                    setInput(history[newIndex].command);
                } else {
                    setHistoryIndex(-1);
                    setInput('');
                }
            }
        } else if (e.key === 'Tab') {
            e.preventDefault();
            const trimmedInput = input.trim().toLowerCase();
            if (!trimmedInput) return;

            const matches = availableCommands.filter(cmd => cmd.startsWith(trimmedInput));
            if (matches.length === 1) {
                setInput(matches[0]);
            }
        }
    };

    return (
        <TerminalLayout>
            <div className="space-y-2">
                <div className="space-y-2 mb-4">
                    <div className="text-gray-400">
                        Welcome to my terminal portfolio. Type <span className="text-terminal-yellow">help</span> to see available commands.
                    </div>
                </div>
                {history.map((item) => (
                    <div key={item.id} className="space-y-1">
                        <div className="flex items-center space-x-2">
                            <span className="text-terminal-green">➜</span>
                            <span className="text-terminal-cyan">~</span>
                            <span className="text-terminal-text">{item.command}</span>
                        </div>
                        <div className="pl-6 mb-2">
                            {item.output}
                        </div>
                    </div>
                ))}

                <div className="flex items-center space-x-2">
                    <span className="text-terminal-green">➜</span>
                    <span className="text-terminal-cyan">~</span>
                    <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="flex-1 bg-transparent border-none outline-none text-terminal-text caret-terminal-text"
                        autoFocus
                        spellCheck={false}
                        autoComplete="off"
                    />
                </div>
                <div ref={bottomRef} />
            </div>
        </TerminalLayout>
    );
};
