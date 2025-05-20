export type Exercise = {
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  id: string;
  instructions: string[];
  name: string;
  secondaryMuscles: string[];
  target: string;
};

export type SidebarLink = {
  id: number;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  path: string;
};

export type SearchFieldProps = {
  setSearchTerm: (param: string) => void;
};

export type FilterParameters = {
  bodyPart: string[];
  muscles: string[];
  equipment: string[];
};

export type FilterPanelProps = {
  filterParameters: FilterParameters;
  setFilterParameters: (param: FilterParameters) => void;
  searchTerm: string;
};

export type FilterOptionGroup = {
  title: string;
  parameter: string;
  options: string[];
};

export type FilterOptionGroupProps = {
  optionsGroup: FilterOptionGroup;
  values: string[];
  handleChange: (param: any) => void;
};

export type ExercisesListProps = {
  exercisesList: Exercise[];
  toggleFavorites: (param: Exercise) => void;
  isFavorite: (param: Exercise) => boolean;
};

export type ExerciseCardProps = {
  exercise: Exercise;
  toggleFavorites: (param: Exercise) => void;
  isFavorite: (param: Exercise) => boolean;
};

export type MobileFilterPanelProps = {
  isOpen: boolean;
  setIsOpen: (param: boolean) => void;
  filterParameters: FilterParameters;
  setFilterParameters: React.Dispatch<React.SetStateAction<FilterParameters>>;
  searchTerm: string;
};
