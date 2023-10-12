import { MutableRefObject, useEffect } from "react";

type UseCloseOnOutsideProps = {
  ref: MutableRefObject<HTMLElement | null>;
  onOutsideClick: () => void;
};

const useCloseOnOutside = ({ ref, onOutsideClick }: UseCloseOnOutsideProps) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onOutsideClick();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, onOutsideClick]);
};

export default useCloseOnOutside;
