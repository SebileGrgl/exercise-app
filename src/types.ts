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
  setFilterParameters: (param: FilterParameters) => void;
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
