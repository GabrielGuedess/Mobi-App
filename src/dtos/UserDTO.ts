export type UserDTO = {
  id: string;
  created_at: Date;
  modified_at: Date;
  email: string;
  telephones: {
    area_code: number;
    number: number;
  }[];
};
