import { useEffect, useState, useMemo, useRef } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import storage from '../helpers/storage';
import updateItems from '../helpers/updateItems';
import getScreenshot from '../helpers/getScreenshot';
import { AppContext } from '../contexts/AppContext';
import { LOCAL_STORAGE_KEYS } from '../types/common';
import { Preset, DecorationItem, SetDecorationItem } from '../types/tree';
import BackgroundSelector from '../components/tree/settings/BackgroundSelector';
import GarlandSelector from '../components/tree/settings/GarlandSelector';
import OtherSettings from '../components/tree/settings/TriggerSettings';
import TreeSelector from '../components/tree/settings/TreeSelector';
import Favorites from '../components/tree/Favorites';
import History from '../components/tree/History';
import Result from '../components/tree/Result';
import ResetLocalStorage from '../components/tree/ResetLocalStorage';
import * as config from '../config';
import './tree.scss';

export default function Tree() {
  const [pageInteracted, setPageInteracted] = useState(false);

  const [background, setBackground] = useState(
    storage.get(LOCAL_STORAGE_KEYS.BACKGROUND) || config.backgroundIDs[0]
  );

  const [tree, setTree] = useState(
    storage.get(LOCAL_STORAGE_KEYS.TREE) || config.treeIDs[0]
  );

  const [garland, setGarland] = useState(
    storage.get(LOCAL_STORAGE_KEYS.GARLAND) || config.garlandIDs[0]
  );

  const [snowEnabled, setSnowEnabled] = useState(
    storage.get(LOCAL_STORAGE_KEYS.SNOW_ENABLED) || config.snowDefaultState
  );

  const [audioEnabled, setAudioEnabled] = useState(
    storage.get(LOCAL_STORAGE_KEYS.AUDIO_ENABLED) || config.audioDefaultState
  );

  const [garlandEnabled, setGarlandEnabled] = useState(
    storage.get(LOCAL_STORAGE_KEYS.GARLAND_ENABLED) ||
      config.garlandDefaultState
  );

  const [decoration, setDecoration] = useState<DecorationItem[]>(
    storage.get(LOCAL_STORAGE_KEYS.DECORATION) || []
  );

  const [presets, setPresets] = useState<Preset[]>(
    storage.get(LOCAL_STORAGE_KEYS.PRESETS) || []
  );

  const setDecorationItem: SetDecorationItem = (id, data, method, position) => {
    setDecoration((prev) => {
      const newItem: DecorationItem = {
        id,
        data,
        position: position || null,
      };
      return updateItems(newItem, method, prev);
    });
  };

  const audio = useMemo(() => {
    const audio = new Audio(config.audioURL);
    audio.loop = true;
    return audio;
  }, []);

  useEffect(() => {
    document.title = config.pageTitles.tree;
  }, []);

  useEffect(() => {
    if (audioEnabled) {
      audio.play();
    } else {
      audio.pause();
    }
    return () => {
      audio.pause();
    };
  }, [audio, audioEnabled]);

  useEffect(() => {
    storage.set(LOCAL_STORAGE_KEYS.BACKGROUND, background);
    storage.set(LOCAL_STORAGE_KEYS.GARLAND, garland);
    storage.set(LOCAL_STORAGE_KEYS.SNOW_ENABLED, snowEnabled);
    storage.set(LOCAL_STORAGE_KEYS.TREE, tree);
    storage.set(LOCAL_STORAGE_KEYS.AUDIO_ENABLED, audioEnabled);
    storage.set(LOCAL_STORAGE_KEYS.GARLAND_ENABLED, garlandEnabled);
    storage.set(LOCAL_STORAGE_KEYS.DECORATION, decoration);
  }, [
    background,
    garland,
    snowEnabled,
    tree,
    audioEnabled,
    decoration,
    garlandEnabled,
  ]);

  const resultTree = useRef(document.createElement('div'));

  const presetHandlers = {
    save: async () => {
      const screenshot = await getScreenshot(resultTree.current, 70, 110);
      const preset = {
        screenshot,
        data: {
          background,
          garland,
          snowEnabled,
          tree,
          audioEnabled,
          decoration,
          garlandEnabled,
        },
      };

      const isNewPreset = !presets.some(
        (el) => JSON.stringify(el.data) === JSON.stringify(preset.data)
      );

      if (isNewPreset) {
        const newPresets = [...presets];
        newPresets.unshift(preset);
        storage.set('presets', newPresets);
        setPresets(newPresets);
      }
    },

    restore: (index: number) => {
      setBackground(presets[index].data.background);
      setGarland(presets[index].data.garland);
      setSnowEnabled(presets[index].data.snowEnabled);
      setTree(presets[index].data.tree);
      setAudioEnabled(presets[index].data.audioEnabled);
      setDecoration(presets[index].data.decoration);
      setGarlandEnabled(presets[index].data.garlandEnabled);
    },

    delete: (index: number) => {
      const newPresets = [...presets];
      newPresets.splice(index, 1);
      storage.set('presets', newPresets);
      setPresets(newPresets);
    },
  };

  const firstInteractionAction = () => {
    setPageInteracted(true);
    if (audioEnabled) {
      audio.play();
    }
  };

  const pageClickHandler = () => !pageInteracted && firstInteractionAction();

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="Tree" onClick={pageClickHandler}>
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
          <ResetLocalStorage />
        </aside>
        <section>
          <Result
            tree={tree}
            garland={garland}
            background={background}
            snowEnabled={snowEnabled}
            garlandEnabled={garlandEnabled}
            decoration={decoration}
            resultTreeRef={resultTree}
            setDecorationItem={setDecorationItem}
          />
        </section>
        <aside>
          <AppContext.Consumer>
            {({ favorites, handleToggleFavorites }) => (
              <Favorites
                favorites={favorites}
                decoration={decoration}
                toggleFavorites={(num) => handleToggleFavorites(num)}
              />
            )}
          </AppContext.Consumer>
          <History presetHandlers={presetHandlers} />
        </aside>
      </div>
    </DndProvider>
  );
}
