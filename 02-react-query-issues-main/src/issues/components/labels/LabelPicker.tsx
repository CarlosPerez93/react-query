import { useQueryLabels } from "../../../hooks/useQueryLabels";

export const LabelPicker = () => {
  const queryLabels = useQueryLabels();

  if (queryLabels.isLoading) return <h1>Loading...</h1>;

  return (
    <div>
      {queryLabels.data?.map((label, index) => (
        <span
          key={index}
          className="badge rounded-pill m-1 label-picker"
          style={{
            border: `1px solid #${label.color}`,
            color: `#${label.color}`,
          }}
        >
          {label.name}
        </span>
      ))}
    </div>
  );
};
