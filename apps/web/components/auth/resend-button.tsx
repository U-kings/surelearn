"use client";

import { useEffect, useState } from "react";

import { Button } from "@workspace/ui/components/button";

export default function ResendButton() {
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    if (seconds === 0) return;

    const timer = setTimeout(() => {
      setSeconds((value) => value - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [seconds]);

  return (
    <div className="space-y-3 text-center">
      {seconds > 0 ? (
        <p className="text-sm text-muted-foreground">
          Resend code in {seconds}s
        </p>
      ) : (
        <Button variant="outline">
          Resend Code
        </Button>
      )}
    </div>
  );
}