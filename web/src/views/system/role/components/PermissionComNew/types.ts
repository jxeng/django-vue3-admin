export interface DataPermissionRangeType {
  label: string;
  value: number;
}

export interface CustomDataPermissionDeptType {
  id: number;
  name: string;
  patent: number;
  children: CustomDataPermissionDeptType[]
}

export interface CustomDataPermissionMenuType {
  id: number;
  name: string;
  is_catalog: boolean;
  menuPermission: { id: number; name: string; value: string }[] | null;
  columns: { id: number; name: string; title: string }[] | null;
  children: CustomDataPermissionMenuType[]
}

export interface MenuDataType {
  key: string;
  name: string;
  isCheck: boolean;
  radio: string;
  btns: { label: string; value: string; isCheck: boolean; role: string; }[];
  columns: { [key: string]: boolean | string; }[]
}