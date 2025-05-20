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
  isFavorite: (param: Exercise) => boolean;
  toggleFavorites: (item: Exercise) => void;
};

export type ExerciseCardProps = {
  exercise: Exercise;
  toggleFavorites: () => void;
  isFavorite: (param: Exercise) => boolean;
};

export type MobileFilterPanelProps = {
  isOpen: boolean;
  setIsOpen: (param: boolean) => void;
  filterParameters: FilterParameters;
  setFilterParameters: React.Dispatch<React.SetStateAction<FilterParameters>>;
  searchTerm: string;
};

export type User = {
  fullName: string;
  email: string;
  password: string;
};

export type LoginData = {
  email: string;
  password: string;
};

export type SignupData = User & {
  confirmPassword: string;
};

export type LoginFormProps = {
  handleUserLogin: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleRememberMeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  rememberMe: boolean;
  formData: LoginData;
};

export type SignupFormProps = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  values: SignupData;
  errors: Partial<Record<keyof SignupData, string>>;
};
