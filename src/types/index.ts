export interface AnatomySystem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  route: string;
}

export interface AnatomyDetail {
  id: string;
  systemId: string;
  title: string;
  description: string;
  imageUrl: string;
  facts: string[];
}

export interface Quiz {
  id: string;
  systemId: string;
  question: string;
  options: string[];
  correctAnswer: number;
}