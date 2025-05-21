import type { MobileFilterPanelProps } from "../types";
import FilterPanel from "./FilterPanel";

const MobileFilterPanel = ({
  isOpen,
  setIsOpen,
  filterParameters,
  setFilterParameters,
  searchTerm,
}: MobileFilterPanelProps) => {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/15 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
      <div
        className={`fixed right-0 top-0 w-4/5 max-w-sm h-full bg-secondary z-50 flex flex-col transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="px-2">
          <div className="px-4 py-2 border-b border-neutral">
            <button
              onClick={() => setIsOpen(false)}
              className="text-2xl font-light text-start w-full"
            >
              &times;
            </button>
          </div>
        </div>
        <div className="overflow-y-auto flex-1">
          <FilterPanel
            filterParameters={filterParameters}
            setFilterParameters={setFilterParameters}
            searchTerm={searchTerm}
            setIsOpen={setIsOpen}
          />
        </div>
      </div>
    </>
  );
};

export default MobileFilterPanel;
