import { Input } from "@/components/ui/input";
import { isValidRegex } from "@/util/regex";
import React from "react";

export default function Regex() {
  console.log(isValidRegex("ab**c"));
  console.log(isValidRegex("a(a+b)"));
  console.log(isValidRegex("b+(a*b*)"));

  return (
    <div className="w-full h-full p-10 ">
      <h1 className="text-3xl">Regex</h1>
      <Input />
    </div>
  );
}
