export interface MenuTypes {
  name: string;
  url: string;
}

export interface serviceTypes {
  img: string;
  name: string;
  texts: string;
}

export interface serviceProps {
  service: {
    img: string;
    name: string;
    texts: string;
  };
}

export interface testimonialType {
  id: number;
  ratings: number;
  name: string;
  profession: string;
  img: string;
  desc: string;
}
