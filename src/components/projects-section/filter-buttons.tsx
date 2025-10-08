import { Badge } from "components/ui/badge";
import { Button } from "components/ui/button";
import type { Category } from "me/projects";
import type { JSX } from "react";
import React from "react";

import type { CategoryItem } from "./types";

interface FilterButtonsProps {
  categories: CategoryItem[];
  activeFilter: Category;
  onFilterChange: (category: Category) => void;
}

export function FilterButtons({
  categories,
  activeFilter,
  onFilterChange,
}: FilterButtonsProps): JSX.Element {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={activeFilter === category.id ? "rainbow" : "default"}
          onClick={() => onFilterChange(category.id)}
          className="cursor-pointer"
        >
          {React.createElement(category.icon, {
            className: "mr-2 h-4 w-4",
          })}
          {category.label}
          <Badge variant="default" className="ml-2">
            {category.count}
          </Badge>
        </Button>
      ))}
    </div>
  );
}
