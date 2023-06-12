import { FC } from "react";
import Loading from "../Loading/Loading";

import { labPickProps } from "./LabelPicker.type";
import { useQueryLabels } from "../../../hooks/useQueryLabels";

export const LabelPicker: FC<labPickProps> = ({ selectedLabels, onChange }) => {
  const queryLabels = useQueryLabels();

  if (queryLabels.isLoading) return <Loading />;

  return (
    <div>
      {queryLabels.data?.map((l, index) => (
        <span
          key={index}
          className={`badge rounded-pill m-1 label-picker 
          ${
            selectedLabels.find((item) => item === l.name) ? "label-active" : ""
          }`}
          style={{
            border: `1px solid #${l.color}`,
            color: `#${l.color}`,
          }}
          onClick={() => onChange(l.name)}
        >
          {l.name}
        </span>
      ))}
    </div>
  );
};

LabelPicker.propTypes = labPickProps;
