export type TodoTypes = {
  content: string;
  excuse: string;
  id: string;
  indulgences: string[];
  is_done: boolean;
  time: any
}

export type IndulgenceTypes = {
  content: string;
  id: string;
  is_used: boolean;
  point: 0;
  tags: string[];
  time: any
}
