import { useEffect, useState } from 'react';
import BackgroundSelector from '../components/tree/settings/BackgroundSelector';
import GarlandSelector from '../components/tree/settings/GarlandSelector';
import OtherSettings from '../components/tree/settings/TriggerSettings';
import TreeSelector from '../components/tree/settings/TreeSelector';
import Favorites from '../components/tree/Favorites';
import History from '../components/tree/History';
import Result from '../components/tree/Result';
import './tree.scss';
import { FavoritesContext } from '../contexts/FavoritesContext';
import * as config from '../config';

export default function Tree() {
  useEffect(() => {
    document.title = `Ёлка`;
  });

  const [background, setBackground] = useState(config.backgroundIDs[0]);
  const [tree, setTree] = useState(config.treeIDs[0]);
  const [garland, setGarland] = useState(config.garlandIDs[0]);
  const [snowEnabled, setSnowEnabled] = useState(config.snowDefaultState);
  const [audioEnabled, setAudioEnabled] = useState(config.audioDefaultState);
  const [garlandEnabled, setGarlandEnabled] = useState(
    config.garlandDefaultState
  );

  return (
    <div className="Tree">
      <aside>
        <OtherSettings
          snowEnabled={snowEnabled}
          setSnowState={setSnowEnabled}
          audioEnabled={audioEnabled}
          setAudioState={setAudioEnabled}
        />
        <TreeSelector setState={setTree} state={tree} />
        <BackgroundSelector setState={setBackground} state={background} />
        <GarlandSelector
          setState={setGarland}
          state={garland}
          isEnabled={garlandEnabled}
          setIsEnabled={setGarlandEnabled}
        />
      </aside>
      <section>
        <Result
          tree={tree}
          garland={garland}
          background={background}
          snowEnabled={snowEnabled}
          audioEnabled={audioEnabled}
          garlandEnabled={garlandEnabled}
        />
      </section>
      <aside>
        <FavoritesContext.Consumer>
          {({ favorites }) => <Favorites favorites={favorites} />}
        </FavoritesContext.Consumer>
        <History />
      </aside>
    </div>
  );
}
