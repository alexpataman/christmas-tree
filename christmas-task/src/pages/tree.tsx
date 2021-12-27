import { useEffect, useState, useMemo, useRef } from 'react';
import BackgroundSelector from '../components/tree/settings/BackgroundSelector';
import GarlandSelector from '../components/tree/settings/GarlandSelector';
import OtherSettings from '../components/tree/settings/TriggerSettings';
import TreeSelector from '../components/tree/settings/TreeSelector';
import Favorites from '../components/tree/Favorites';
import History from '../components/tree/History';
import Result from '../components/tree/Result';
import './tree.scss';
import { AppContext } from '../contexts/AppContext';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { IDataItem } from '../types/common';
import * as config from '../config';
import Storage from '../helpers/Storage';
import ResetLocalStorage from '../components/tree/ResetLocalStorage';
import html2canvas from 'html2canvas';

export type Position = { x: number; y: number } | null;

export type Preset = {
  screenshot: string;
  data: {
    background: string;
    garland: string;
    snowEnabled: string;
    tree: string;
    audioEnabled: string;
    decoration: DecorationItem[];
    garlandEnabled: string;
  };
};

export type DecorationItem = {
  id: number;
  position: Position;
  data: IDataItem;
};

export type SetDecorationItem = (
  id: number,
  item: IDataItem,
  type: string,
  method: string,
  position?: Position
) => void;

export default function Tree() {
  const storage = useMemo(() => {
    return new Storage();
  }, []);

  const [pageInteracted, setPageInteracted] = useState(false);
  const firstInteractionAction = () => {
    setPageInteracted(true);
    if (audioEnabled) {
      audio.play();
    }
  };

  const [background, setBackground] = useState(
    storage.get('background') || config.backgroundIDs[0]
  );
  const [tree, setTree] = useState(storage.get('tree') || config.treeIDs[0]);
  const [garland, setGarland] = useState(
    storage.get('garland') || config.garlandIDs[0]
  );
  const [snowEnabled, setSnowEnabled] = useState(
    storage.get('snowEnabled') || config.snowDefaultState
  );
  const [audioEnabled, setAudioEnabled] = useState(
    storage.get('audioEnabled') || config.audioDefaultState
  );
  const [garlandEnabled, setGarlandEnabled] = useState(
    storage.get('garlandEnabled') || config.garlandDefaultState
  );
  const [decoration, setDecoration] = useState<DecorationItem[]>(
    storage.get('decoration') || []
  );

  const [presets, setPresets] = useState<Preset[]>(
    storage.get('presets') || []
  );

  const setDecorationItem = (
    id: number,
    data: IDataItem,
    type: string,
    method: string,
    position?: Position
  ) => {
    setDecoration((prev) => {
      const newItem = {
        id,
        data,
        position: position || null,
      };

      switch (method) {
        case 'update':
          return [
            ...prev.map((el) => {
              if (el.id === newItem.id) {
                Object.assign(el.position, newItem.position);
              }
              return el;
            }),
          ];
        case 'delete':
          return [...prev.filter((el) => el.id !== newItem.id)];
        case 'add':
        default:
          newItem.id = new Date().getTime();
          return [...prev, newItem];
      }
    });
  };

  const audio = useMemo(() => {
    const audio = new Audio(config.audioURL);
    audio.loop = true;
    return audio;
  }, []);

  useEffect(() => {
    document.title = `Ёлка`;
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
    storage.set('background', background);
    storage.set('garland', garland);
    storage.set('snowEnabled', snowEnabled);
    storage.set('tree', tree);
    storage.set('audioEnabled', audioEnabled);
    storage.set('garlandEnabled', garlandEnabled);
    storage.set('decoration', decoration);
  }, [
    storage,
    background,
    garland,
    snowEnabled,
    tree,
    audioEnabled,
    decoration,
    garlandEnabled,
  ]);

  useEffect(() => {});

  const resultTree = useRef(document.createElement('div'));

  const presetHandlers = {
    save: async () => {
      const canvasOptions = {
        backgroundColor: null,
      };
      const screenshot = await html2canvas(
        resultTree.current,
        canvasOptions
      ).then(function (canvas) {
        let extra_canvas = document.createElement('canvas');
        extra_canvas.width = 70;
        extra_canvas.height = 110;
        var ctx = extra_canvas.getContext('2d');
        ctx!.drawImage(
          canvas,
          0,
          0,
          canvas.width,
          canvas.height,
          0,
          0,
          extra_canvas.width,
          extra_canvas.height
        );
        return extra_canvas.toDataURL();
      });

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

  return (
    <DndProvider backend={HTML5Backend}>
      <div
        className="Tree"
        onClick={() => !pageInteracted && firstInteractionAction()}
      >
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
