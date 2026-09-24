"use client";

import * as React from "react";
import { EyeIcon, EyeOffIcon, LockIcon, MailIcon, PhoneIcon, UserIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  InputGroup,
  InputGroupAddon, 
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

export function Signup() {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(undefined);
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

  return (
    <div className="w-full">
      {/* register form title*/}
      <div className="mb-6 text-center">
        <h1 className="text-xl font-bold">CREATE AN ACCOUNT</h1>
        <p className="text-muted-foreground">
          Already have an account?
          <a href="#" className="pl-1 text-blue-600 text-sm hover:underline">
            Sign In
          </a>
        </p>
      </div>

      {/* register form */}
      <form>
        <FieldGroup>
          <FieldSet>
            <FieldGroup>
              {/* Personal Information */}
              <Field>
                <FieldDescription>PERSONAL INFORMATION</FieldDescription>
                <FieldLabel htmlFor="signup-account-label">
                  Full name
                </FieldLabel>
                <InputGroup>
                  <InputGroupInput
                    type="text"
                    placeholder="Enter your username"
                    required
                  />
                  <InputGroupAddon>
                    <UserIcon />
                  </InputGroupAddon>
                </InputGroup>
                <FieldLabel htmlFor="date">Date of birth</FieldLabel>
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger
                    render={
                      <Button
                        variant="outline"
                        id="date"
                        className={cn(
                          "w-full justify-start font-normal text-left",
                          !date && "text-muted-foreground",
                          date && "text-foreground",
                        )}
                      >
                        <CalendarIcon data-icon="inline-start" />
                        {date ? date.toLocaleDateString() : "MM/DD/YYYY"}
                      </Button>
                    }
                  />

                  <PopoverContent
                    className="w-auto overflow-hidden p-0"
                    align="start"
                  >
                    <Calendar
                      mode="single"
                      selected={date}
                      defaultMonth={date}
                      captionLayout="dropdown"
                      onSelect={(date) => {
                        setDate(date);
                        setOpen(false);
                      }}
                    />
                  </PopoverContent>
                </Popover>

                <FieldLabel htmlFor="signup-gender-label">Gender</FieldLabel>
                <RadioGroup defaultValue="male" className="w-fit flex gap-6">
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="male" id="r1" />
                    <Label htmlFor="gender-male">Male</Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="female" id="r2" />
                    <Label htmlFor="gender-female">Female</Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="other" id="r3" />
                    <Label htmlFor="gender-other">Other</Label>
                  </div>
                </RadioGroup>
              </Field>

              {/* Account Connection */}
              <Field>
                <FieldDescription>ACCOUNT CONNECTION</FieldDescription>
                <FieldLabel htmlFor="signup-email-label">
                  Email address
                </FieldLabel>
                <InputGroup>
                  <InputGroupInput
                    type="email"
                    placeholder="name@example.com"
                  />
                  <InputGroupAddon>
                    <MailIcon />
                  </InputGroupAddon>
                </InputGroup>

                <FieldLabel htmlFor="signup-phone-label">
                  Phone number
                </FieldLabel>
                <InputGroup>
                  <InputGroupInput placeholder="(+855)" />
                  <InputGroupAddon>
                    <PhoneIcon />
                  </InputGroupAddon>
                </InputGroup>

                <FieldLabel htmlFor="signup-password-label">
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
                <FieldDescription className="text-xs leading-none">
                  Password with atleast one uppercase, lowercase letter, and a
                  special character.
                </FieldDescription>
                <Field orientation="horizontal" className="pt-2">
                  <Checkbox id="toggle-checkbox" name="toggle-checkbox" />
                  <FieldLabel htmlFor="toggle-checkbox">
                    I have read and agree to the
                    <a className="text-blue-600 text-sm hover:underline">
                      Terms and Conditions
                    </a>
                  </FieldLabel>
                </Field>
                <Button type="submit" size="lg" className="w-full text-xl">
                  Create account
                </Button>
              </Field>
            </FieldGroup>
          </FieldSet>
        </FieldGroup>
      </form>
    </div>
  );
}

export default Signup;
