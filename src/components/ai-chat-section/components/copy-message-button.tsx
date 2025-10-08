import { Button } from "components/ui/button";
import { Check, Copy } from "lucide-react";
import type { JSX } from "react";
import React, { useState } from "react";

interface CopyMessageButtonProps {
  content: string;
}

export function CopyMessageButton({
  content,
}: CopyMessageButtonProps): JSX.Element {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (): Promise<void> => {
    await navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="relative">
      <Button
        variant="rainbow"
        size="sm"
        onClick={handleCopy}
        className="h-7 w-7 p-0"
        title={copied ? "Copied!" : "Copy"}
      >
        {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
      </Button>
    </div>
  );
}
