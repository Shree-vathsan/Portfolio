import React from 'react';

interface TerminalLayoutProps {
    children: React.ReactNode;
}

export const TerminalLayout: React.FC<TerminalLayoutProps> = ({ children }) => {
    return (
        <div className="w-full max-w-[800px] h-[80vh] md:h-[600px] bg-terminal-bg rounded-lg shadow-2xl overflow-hidden flex flex-col font-mono border border-gray-800 resize-both min-w-[300px] min-h-[300px]">
            {/* Window Title Bar */}
            <div className="h-8 bg-[#1f2335] flex items-center px-4 space-x-2 border-b border-gray-800">
                <div className="w-3 h-3 rounded-full bg-terminal-red hover:bg-red-600 transition-colors cursor-pointer"></div>
                <div className="w-3 h-3 rounded-full bg-terminal-yellow hover:bg-yellow-500 transition-colors cursor-pointer"></div>
                <div className="w-3 h-3 rounded-full bg-terminal-green hover:bg-green-500 transition-colors cursor-pointer"></div>
                <div className="flex-1 text-center text-gray-400 text-sm select-none">
                    Shreevathsan@portfolio: ~
                </div>
            </div>

            {/* Terminal Content Area */}
            <div className="flex-1 p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent text-terminal-text">
                {children}
            </div>
        </div>
    );
};
