import { useState } from "react";
import { IssueList } from "../components/IssueList";
import { LabelPicker } from "../components/labels/LabelPicker";

type T = {
  name: string;
};

export const ListView = () => {
  const [selectedLabels, setSelectedLabels] = useState<string[]>([]);

  const handleOnLabel = (labelName: string) => {
    console.log(labelName);
    selectedLabels.includes(labelName)
      ? setSelectedLabels(selectedLabels.filter((label) => label !== labelName))
      : setSelectedLabels([...selectedLabels, labelName]);
    /*   const exits = selectedLabels.find((item) => item.name === labelName);
    setSelectedLabels([
      ...selectedLabels,
      !exits
        ? {
            id: Math.floor(Math.random() * 100),
            name: labelName,
            color: "#f51",
          }
        : exits,
    ]); */
  };

  return (
    <div className="row mt-5">
      <div className="col-8">
        <IssueList />
      </div>
      <div className="col-4">
        <LabelPicker selectedLabels={selectedLabels} onChange={handleOnLabel} />
      </div>
    </div>
  );
};
