type Fn = () => void;

interface IObserver {
  subscribe(observer: ObserverItem): void;

  unsubscribe(observer: ObserverItem): void;

  fire(): void;
}

export class Observer implements IObserver {
  constructor(private handlers: ObserverItem[] = []) {}

  subscribe(item: ObserverItem) {
    if (!this.handlers.find((el) => el.name === item.name)) {
      this.handlers.push(item);
    }
  }

  unsubscribe(item: ObserverItem) {
    this.handlers = this.handlers.filter((el) => el.name !== item.name);
  }

  fire() {
    this.handlers.forEach((item) => item.fire());
  }
}

export class ObserverItem {
  constructor(readonly name: string, private item: Fn) {}

  fire() {
    this.item();
  }
}
