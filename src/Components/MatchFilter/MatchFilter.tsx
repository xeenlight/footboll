import React from "react";

interface MatchFilterProps {
  filter: string;
  onFilterChange: (status: string) => void;
}

const MatchFilter: React.FC<MatchFilterProps> = ({ filter, onFilterChange }) => {
  const statuses = [
    "in-play",
    "finished",
    "draw",
    "paused",
    "soon",
    "postponed",
  ];

  return (
    <div className="filter-buttons">
      {statuses.map((status) => (
        <button
          key={status}
          onClick={() => onFilterChange(status)}
          className={filter === status ? "active" : ""}
        >
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default MatchFilter;
