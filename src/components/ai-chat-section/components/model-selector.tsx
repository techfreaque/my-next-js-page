import { Button } from "components/ui/button";
import { DropdownItem } from "components/ui/dropdown-item";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "components/ui/dropdown-menu";
import { cn } from "lib/utils";
import { ChevronDown } from "lucide-react";
import type { JSX } from "react";
import React, { useState } from "react";
import { modelOptions } from "utils/model-config";

import { useAIChatContext } from "../AIChatContext";

interface ModelSelectorProps {
  disabled?: boolean;
  className: string;
  textClassName?: string;
}

/**
 * Shared model selector dropdown that maintains consistent styling
 * across chat input and message editor components.
 */
export function ModelSelector({
  disabled = false,
  className,
  textClassName,
}: ModelSelectorProps): JSX.Element {
  const [modelHover, setModelHover] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Get settings from context
  const { selectedModel, setSelectedModel } = useAIChatContext();

  // Maintain hover state when dropdown is open
  const shouldShowHover = modelHover || isOpen;
  const icon = modelOptions.find((m) => m.id === selectedModel)?.icon;
  return (
    <DropdownMenu onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="rainbow"
          size="sm"
          isHover={shouldShowHover}
          className={cn("h-8 font-medium justify-between", className)}
          setIsHover={setModelHover}
          disabled={disabled}
        >
          <span className="flex items-center gap-2">
            <span
              className={"text-base w-6 h-6 flex items-center justify-center"}
            >
              {icon &&
                (React.isValidElement(icon)
                  ? icon
                  : typeof icon === "string"
                    ? icon
                    : React.createElement(
                        icon as React.ComponentType<{
                          className?: string;
                          size?: number;
                        }>,
                        { className: "h-6 w-6 size-6" },
                      ))}
            </span>
            <span className={cn("font-medium text-sm", textClassName)}>
              {modelOptions.find((m) => m.id === selectedModel)?.name}
            </span>
          </span>
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[320px]">
        {modelOptions.map((model) => {
          const isSelected = model.id === selectedModel;
          return (
            <DropdownMenuItem key={model.id}>
              <DropdownItem
                isSelected={isSelected}
                icon={model.icon}
                label={model.name}
                description={`${model.provider} • ${(model.contextWindow / 1000).toFixed(0)}K context${model.parameterCount ? ` • ${model.parameterCount}B params` : ""}`}
                onClick={() => setSelectedModel(model.id)}
              />
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
