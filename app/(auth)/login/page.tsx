"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { EyeIcon, EyeOffIcon, LockIcon, UserIcon } from "lucide-react";

export function Login() {
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

  return (
    <div className="w-full">
      {/* login form title */}
      <div className="mb-6 text-center">
        <h1 className="text-xl font-bold">SIGN IN ACCOUNT</h1>
        <p className="text-muted-foreground">
          Not yet have an account?
          <a href="#" className="pl-1 text-blue-600 text-sm hover:underline">
            Sign Up
          </a>
        </p>
      </div>

      <form>
        <FieldGroup>
          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldDescription>PERSONAL INFORMATION</FieldDescription>
                <FieldLabel htmlFor="login-account-input">
                  Account Information
                </FieldLabel>
                <InputGroup>
                  <InputGroupInput
                    id="login-account-input"
                    placeholder="Enter your username or email"
                    required
                  />
                  <InputGroupAddon>
                    <UserIcon />
                  </InputGroupAddon>
                </InputGroup>
              </Field>

              <Field>
                <FieldLabel htmlFor="login-password-input">
                  Password
                </FieldLabel>
                <InputGroup>
                  <InputGroupAddon>
                    <LockIcon />
                  </InputGroupAddon>
                  <InputGroupInput
                    id="login-password-input"
                    type={isPasswordVisible ? "text" : "password"}
                    placeholder="Enter your password"
                    required
                  />
                  <InputGroupAddon align="inline-end">
                    <InputGroupButton
                      type="button"
                      onClick={() => setIsPasswordVisible((prev) => !prev)}
                      size="icon-xs"
                      aria-label={isPasswordVisible ? "Hide password" : "Show password"}
                    >
                      {isPasswordVisible ? (
                        <EyeOffIcon className="h-4 w-4 text-muted-foreground" />
                      ) : (
                        <EyeIcon className="h-4 w-4 text-muted-foreground" />
                      )}
                    </InputGroupButton>
                  </InputGroupAddon>
                </InputGroup>
              </Field>

              <a
                href="#"
                className="ml-auto text-blue-600 text-sm hover:underline"
              >
                Forgot your password?
              </a>
              <Button type="submit" size="lg" className="w-full text-xl">
                Log in
              </Button>
            </FieldGroup>
          </FieldSet>
        </FieldGroup>
      </form>
    </div>
  );
}

export default Login;