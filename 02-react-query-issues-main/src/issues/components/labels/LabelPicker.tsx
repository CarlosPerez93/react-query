import { FC } from "react";
import Loading from "../Loading/Loading";

import { labPickProps } from "./LabelPicker.type";
import { useQueryLabels } from "../../../hooks/useQueryLabels";

export const LabelPicker: FC<labPickProps> = ({ selectedLabels, onChange }) => {
  const queryLabels = useQueryLabels();

  if (queryLabels.isLoading) return <Loading />;

  return (
    <div>
      {queryLabels.data?.map((label) => (
        <span
          key={label.id}
          className={`badge rounded-pill m-1 label-picker 
          ${selectedLabels.includes(label.name) ? "label-active" : ""}`}
          style={{
            border: `1px solid #${label.color}`,
            color: `#${label.color}`,
          }}
          onClick={() => onChange(label.name)}
        >
          {label.name}
        </span>
      ))}
    </div>
  );
};

LabelPicker.propTypes = labPickProps;
