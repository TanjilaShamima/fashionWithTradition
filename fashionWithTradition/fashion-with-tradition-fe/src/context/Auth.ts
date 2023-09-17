import { UserType } from "@/utils/types/authType";
import { CartType } from "@/utils/types/cartType";
import { CategoryType } from "@/utils/types/commonTypes";
import React from "react";

export type FashionApp = {
  bookmarks: string[] | undefined;
  user: UserType | undefined;
  updateCustomer: (props: Partial<UserType>) => Promise<string>;
  carts: "Loading" | CartType[];
  currentCartId: string | undefined;
  categories: CategoryType[];
};

export const defaultValue: FashionApp = {
  bookMarks: [],
  user: undefined,
  updateCustomer: async () => {
    return "";
  },
  carts: [],
  currentCartId: undefined,
  categories: [],
};

export const AuthContext: React.Context<FashionApp> = React.createContext<FashionApp>(defaultValue)
