export function onBoxClick(idx) {
  return function update(state, props) {
    let { currentBox, lastBox } = state;

    if (currentBox !== null) lastBox = currentBox;

    return {
      lastBox,
      currentBox: idx
    };
  }
};

export function onDeleteClick(id) {
  return function update(state, props) {
    return {
      boxes: state.boxes.filter((box) => box.id !== id)
    };
  }
};
