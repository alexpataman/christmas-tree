import { useEffect, useState, useMemo } from 'react';
import BackgroundSelector from '../components/tree/settings/BackgroundSelector';
import GarlandSelector from '../components/tree/settings/GarlandSelector';
import OtherSettings from '../components/tree/settings/TriggerSettings';
import TreeSelector from '../components/tree/settings/TreeSelector';
import Favorites from '../components/tree/Favorites';
import History from '../components/tree/History';
import Result from '../components/tree/Result';
import './tree.scss';
import { FavoritesContext } from '../contexts/FavoritesContext';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { IDataItem } from '../types/common';
import * as config from '../config';

export type Position = { x: number; y: number } | null;

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
  const [background, setBackground] = useState(config.backgroundIDs[0]);
  const [tree, setTree] = useState(config.treeIDs[0]);
  const [garland, setGarland] = useState(config.garlandIDs[0]);
  const [snowEnabled, setSnowEnabled] = useState(config.snowDefaultState);
  const [audioEnabled, setAudioEnabled] = useState(config.audioDefaultState);
  const [garlandEnabled, setGarlandEnabled] = useState(
    config.garlandDefaultState
  );
  const [decoration, setDecoration] = useState<DecorationItem[]>([]);
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
                console.log(newItem.id);
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
    console.log(decoration);
  }, [decoration]);

  return (
    <DndProvider backend={HTML5Backend}>
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
            garlandEnabled={garlandEnabled}
            decoration={decoration}
            setDecorationItem={setDecorationItem}
          />
        </section>
        <aside>
          <FavoritesContext.Consumer>
            {({ favorites }) => <Favorites favorites={favorites} />}
          </FavoritesContext.Consumer>
          <History />
        </aside>
      </div>
    </DndProvider>
  );
}
