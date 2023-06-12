import { useState } from "react";
import { IssueList } from "../components/IssueList";
import { LabelPicker } from "../components/labels/LabelPicker";
import { useIssues } from "../../hooks";

export const ListView = () => {
  const [selectedLabels, setSelectedLabels] = useState<string[]>([]);
  const { issuesQuery } = useIssues();
  const handleOnLabel = (labelName: string) => {
    selectedLabels.includes(labelName)
      ? setSelectedLabels(selectedLabels.filter((label) => label !== labelName))
      : setSelectedLabels([...selectedLabels, labelName]);
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
