export interface Hero {
    id:number;
    nickname: string;
    real_name: string;
    origin_description: string;
    superpowers: string[];
    catch_phrase: string;
    images: string;
  }

  export type RootState = {
        heroes: Hero[] | null;
};