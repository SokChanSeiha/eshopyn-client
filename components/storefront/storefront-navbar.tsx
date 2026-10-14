import {  CircleUserRound, Search, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { Field, FieldLabel } from "../ui/field";
import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText } from "../ui/input-group";

function StorefrontNavbar() {
  return (
    <header className="max-w-full border-b border-gray shadow py-4  ">
      <div className="w-full flex justify-between max-w-8/10 mx-auto">
        {/* Logo */}
        <Link href="/" className="inline-flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 font-bold text-white shadow-sm">
            E
          </div>
          <span className="text-xl font-bold tracking-tight text-gray-900">
            Shopyn
          </span>
        </Link>

        <div className="flex gap-5 justify-center items-center"> 
          {/* <Search /> */}
          <div>
            <Field>
              <InputGroup className="rounded-full overflow-hidden border bg-gray-100">
                <InputGroupInput 
                  id="input-group-url" 
                  placeholder="Search" 
                  className="rounded-full pl-4" 
                />
                <InputGroupAddon align="inline-end" className="pr-3">
                  <Search className="size-6 shrink-0 text-gray-500" />
                </InputGroupAddon>
              </InputGroup>
            </Field>
          </div>
          <ShoppingBag />
          <CircleUserRound />
        </div>
      </div>
    </header>
  );
}

export default StorefrontNavbar;
