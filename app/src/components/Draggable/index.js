import './style.css';
import _ from "lodash";
import React from "react";

const Draggable = (props) => {
  const { debounceTime = 0 } = props;
  const ref = React.useRef();
  const [mouseLoc, setMouseLoc] = React.useState([0, 0]);
  const [isDraggable, setIsDraggable] = React.useState(false);
  const onMouseMove = (e) => {
    if (isDraggable) setMouseLoc([e.clientX, e.clientY]);
  };
  const onMouseMoveDebounced = _.debounce(onMouseMove, debounceTime);
  const enableDragging = (e) => setIsDraggable(true);
  const disableDragging = (e) => setIsDraggable(false);

  React.useEffect(() => {
    // console.log(mouseLoc);
    if (ref.current) {
      const width = ref.current.offsetWidth;
      const height = ref.current.offsetHeight;
      ref.current.style.left = `calc(${mouseLoc[0]}px - ${width}px/2)`;
      ref.current.style.top = `calc(${mouseLoc[1]}px - ${height}px/2)`;
    }
  }, [mouseLoc]);
  return (
    <div
      className="draggable__area"
      style={{ width: "100%", height: "100%" }}
      onMouseMove={onMouseMoveDebounced}
      onMouseUp={disableDragging}
    >
      <div
        ref={ref}
        className="draggable__object"
        onMouseDown={enableDragging}
        onMouseUp={disableDragging}
        // onMouseLeave={disableDragging}
        style={{
          cursor: "pointer",
          position: "absolute"
        }}
      >
        {props.children}
      </div>
    </div>
  );
};

export default Draggable;
