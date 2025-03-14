import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useOutsideClick = (ref, state, setState, redux) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (state && ref.current && !ref.current.contains(e.target)) {
        if (redux && dispatch) {
          dispatch(setState(!state));
        } else {
          setState(!state);
        }
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [dispatch, ref, state, setState, redux]);
};

export default useOutsideClick;

