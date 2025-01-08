'use client'

import { Input } from "@/components/ui/input";
import { isValidRegex } from "@/util/regex";
import React, {useState} from "react";

export default function Regex() {
    const [valid, isValid] = useState(false);
    const [regex, setRegex] = useState("");

  console.log(isValidRegex("ab**c"));
  console.log(isValidRegex("a(a+b)"));
  console.log(isValidRegex("b+(a*b*)"));

  const handleRegex = (e) => {
      if (e.key == "Enter") {
          isValid(isValidRegex(regex).isValid)
      }
  }

  return (
    <div className="w-full h-full p-10 ">
      <h1 className="text-3xl">Regex</h1>
      <Input onKeyUp={handleRegex} onChange={(e) => setRegex(e.target.value)}/>
        <h2>Result: {valid.toString()}</h2>
    </div>
  );
}
