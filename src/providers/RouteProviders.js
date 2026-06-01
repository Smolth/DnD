import {
  ScenariosProvider,
  MasterCharactersProvider,
  PlayersProvider,
  WorldMapProvider,
  RulesProvider,
} from '../context';
import { ZonesProvider } from '../context/ZoneContext';

export function ScenariosRoute({ children }) {
  return <ScenariosProvider>
    <ZonesProvider>{children}</ZonesProvider>
  </ScenariosProvider>;
}

export function ScenarioDetailRoute({ children }) {
  return (
    <ScenariosProvider>
      <MasterCharactersProvider>{children}</MasterCharactersProvider>
    </ScenariosProvider>
  );
}

export function MasterCharacterRoute({ children }) {
  return <MasterCharactersProvider>{children}</MasterCharactersProvider>;
}

export function PlayersRoute({ children }) {
  return <PlayersProvider>{children}</PlayersProvider>;
}

export function WorldMapRoute({ children }) {
  return <WorldMapProvider>
    <ZonesProvider>{children}</ZonesProvider>
  </WorldMapProvider>;
}

export function RulesRoute({ children }) {
  return <RulesProvider>{children}</RulesProvider>;
}
