import { Button } from "components/ui/button";
import { DropdownItem } from "components/ui/dropdown-item";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import type { JSX } from "react";
import React, { useState } from "react";
import { toneOptions } from "utils/tone-config";

import { useAIChatContext } from "../contexts/AIChatContext";

interface ToneSelectorProps {
  disabled?: boolean;
  className?: string;
}

/**
 * Shared tone selector dropdown that maintains consistent styling
 * across chat input and message editor components.
 */
export function ToneSelector({
  disabled = false,
  className = "w-[170px]",
}: ToneSelectorProps): JSX.Element {
  const [toneHover, setToneHover] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Get settings from context
  const { selectedTone, setSelectedTone } = useAIChatContext();

  // Maintain hover state when dropdown is open
  const shouldShowHover = toneHover || isOpen;

  return (
    <DropdownMenu onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="rainbow"
          size="sm"
          isHover={shouldShowHover}
          className={`${className} h-8 font-medium justify-between`}
          onMouseEnter={() => setToneHover(true)}
          onMouseLeave={() => setToneHover(false)}
          disabled={disabled}
        >
          <span className="flex items-center gap-2">
            <span className="text-base w-4 h-4 flex items-center justify-center">
              {toneOptions.find((t) => t.id === selectedTone)?.emoji}
            </span>
            <span className="font-medium text-sm">
              {toneOptions.find((t) => t.id === selectedTone)?.name}
            </span>
          </span>
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[320px]">
        {toneOptions.map((tone) => {
          const isSelected = tone.id === selectedTone;
          return (
            <DropdownMenuItem key={tone.id}>
              <DropdownItem
                isSelected={isSelected}
                icon={tone.emoji}
                label={tone.name}
                description={tone.description}
                onClick={() => setSelectedTone(tone.id)}
              />
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
