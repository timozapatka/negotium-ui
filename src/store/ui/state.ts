export interface UiInterface {
  prop: boolean;
}

function state(): UiInterface {
  return {
    prop: false
  }
};

export default state;
