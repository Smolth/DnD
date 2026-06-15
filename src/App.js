import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ScenarioPage from './pages/ScenarioPage';
import MasterCharacterPage from './pages/MasterCharacterPage';
import PlayersPage from './pages/PlayersPage';
import PlayerDetailPage from './pages/PlayerDetailPage';
import WorldMapPage from './pages/WorldMapPage';
import RulesPage from './pages/RulesPage';
import MHPage from './pages/MHPage';
import {
  ScenariosRoute,
  ScenarioDetailRoute,
  MasterCharacterRoute,
  PlayersRoute,
  WorldMapRoute,
  RulesRoute,
} from './providers/RouteProviders';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route
          path="/"
          element={
            <ScenariosRoute>
              <HomePage />
            </ScenariosRoute>
          }
        />
        <Route
          path="/scenario/:slug"
          element={
            <ScenarioDetailRoute>
              <ScenarioPage />
            </ScenarioDetailRoute>
          }
        />
        <Route
          path="/master/:id"
          element={
            <MasterCharacterRoute>
              <MasterCharacterPage />
            </MasterCharacterRoute>
          }
        />
        <Route
          path="/players"
          element={
            <PlayersRoute>
              <PlayersPage />
            </PlayersRoute>
          }
        />
        <Route
          path="/npc"
          element={
            <MasterCharacterRoute>
              <MHPage />
            </MasterCharacterRoute>
          }
        />
        <Route
          path="/players/:id"
          element={
            <PlayersRoute>
              <PlayerDetailPage />
            </PlayersRoute>
          }
        />
        <Route
          path="/world-map/:link"
          element={
            <WorldMapRoute>
              <WorldMapPage />
            </WorldMapRoute>
          }
        />
        <Route
          path="/rules"
          element={
            <RulesRoute>
              <RulesPage />
            </RulesRoute>
          }
        />
      </Routes>
    </Layout>
  );
}
