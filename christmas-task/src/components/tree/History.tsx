import { storage } from '../../helpers/storage';
import { Preset } from '../../types/tree';
import { LOCAL_STORAGE_KEYS } from '../../types/common';
import './History.scss';

interface IHistoryProps {
  presetHandlers: {
    save: () => void;
    restore: (index: number) => void;
    delete: (index: number) => void;
  };
}

export const History = ({ presetHandlers }: IHistoryProps) => {
  const presets: Preset[] = storage.get(LOCAL_STORAGE_KEYS.PRESETS);

  return (
    <div className="widget History">
      <h5>Вы нарядили</h5>
      {presets && presets.length ? (
        <ul className="presets-list">
          {presets.map((el, index) => (
            <li key={index}>
              <span
                className={`bg-${el.data.background}`}
                onClick={() => presetHandlers.restore(index)}
              >
                <img src={el.screenshot} alt="" />
              </span>
              <i
                title="Удалить"
                onClick={() => presetHandlers.delete(index)}
              ></i>
            </li>
          ))}
        </ul>
      ) : (
        <></>
      )}
      <button className="button" onClick={presetHandlers.save}>
        Сохранить текущее состояние*
      </button>
      <small>*Сохраняются только уникальные наборы настроек</small>
    </div>
  );
};
