export type Source = {
  id: string;
  name: string;
  rtmpUrl: string;
  sceneId: string;
};

export type Output = {
  name: string;
  rtmpUrl: string;
};

export enum TransitionType {
  Cut = 'cut_transition',
  Fade = 'fade_transition',
  Swipe = 'swipe_transition',
  Slide = 'slide_transition',
}
