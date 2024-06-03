import type { EventDetail } from '../types';

const useDispatchEvent = (_name: string, _data: EventDetail = {}): void => {
  window.dispatchEvent(new CustomEvent(_name, { detail: _data }));
  //console.log("useDispatchEvent", _name, _data);
};

export default useDispatchEvent;
