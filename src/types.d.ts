// Events
export interface CustomEventWithDetail<T> extends Event {
  detail: T;
}
export interface EventDetail {
  [key: string]: unknown;
}
