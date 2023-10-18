import { useState } from "react";
import Loading from "../components/Loading/Loading";

import { IssueList } from "../components/issuesList/IssueList";
import { LabelPicker } from "../components/labels/LabelPicker";

import { useIssues } from "../../hooks";
import { State } from "../../common/getIssues/getIssues.type";

export const ListView = () => {
  const [selectedLabels, setSelectedLabels] = useState<string[]>([]);
  const [state, setState] = useState<State>();

  const { issuesQuery } = useIssues({ state, labels: selectedLabels });

  const handleOnLabel = (labelName: string) => {
    selectedLabels.includes(labelName)
      ? setSelectedLabels(selectedLabels.filter((label) => label !== labelName))
      : setSelectedLabels([...selectedLabels, labelName]);
  };

  return (
    <div className="row mt-5">
      <div className="col-8">
        {issuesQuery.isLoading ? (
          <Loading />
        ) : (
          <IssueList
            issues={issuesQuery.data || []}
            state={state}
            onStateChanged={(newState) => setState(newState)}
          />
        )}
      </div>
      <div className="col-4">
        <LabelPicker
          selectedLabels={selectedLabels}
          onChange={(labelName) => handleOnLabel(labelName)}
        />
      </div>
    </div>
  );
};
