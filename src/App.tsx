import { TerminalProvider } from './context/TerminalContext';
import { Terminal } from './components/Terminal';
import './index.css';

import { useTerminal } from './context/TerminalContext';
import { GUI } from './components/GUI';

function AppContent() {
  const { viewMode } = useTerminal();

  return (
    <div className={`min-h-screen flex items-center justify-center ${viewMode === 'terminal' ? 'p-4' : 'bg-white'}`}>
      {viewMode === 'terminal' ? <Terminal /> : <GUI />}
    </div>
  );
}

function App() {
  return (
    <TerminalProvider>
      <AppContent />
    </TerminalProvider>
  );
}

export default App;
