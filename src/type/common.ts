export interface IContent {
  title: string;
  content: string;
}

export interface IFood {
  id?: string;
  name: string;
  quantity: number;
  calories: number;
  image: string;
  content: Array<IContent>;
}

export interface IExercise {
  id?: string;
  name: string;
  image: string;
  time: string;
  content: Array<IContent>;
}

export interface INews {
  id?: string;
  name: string;
  image: string;
  subTitle: string;
  content: Array<IContent>;
}

export interface ISession {
  [sessionId: string]: {
    [foodId: string]: number; // quantity
  };
}

export interface IMenu {
  [dateId: string]: ISession;
}
