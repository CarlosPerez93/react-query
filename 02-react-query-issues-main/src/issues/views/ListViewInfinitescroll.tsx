import { useState } from "react";
import Loading from "../components/Loading/Loading";

import { IssueList } from "../components/issuesList/IssueList";
import { LabelPicker } from "../components/labels/LabelPicker";

import { State } from "../../common/Interface.type";
import { useIssuesInfinite } from "../../hooks/useIssuesInfinite";

export const ListViewInfiniteScroll = () => {
  const [selectedLabels, setSelectedLabels] = useState<string[]>([]);
  const [state, setState] = useState<State>();

  const { issuesQuery } = useIssuesInfinite({
    state,
    labels: selectedLabels,
  });

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
            issues={issuesQuery.data?.pages.flat() || []}
            state={state}
            onStateChanged={(newState) => setState(newState)}
          />
        )}

        <button
          className="btn btn-outline-primary mt-2"
          disabled={!issuesQuery.hasNextPage}
          onClick={() => issuesQuery.fetchNextPage()}
        >
          Load more...
        </button>
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
