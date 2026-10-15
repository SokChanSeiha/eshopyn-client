"use client";

import * as React from "react";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  CalendarIcon,
  MailIcon,
  PhoneIcon,
  SearchIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function AccountPage() {
    const [open, setOpen] = React.useState(false);
    const [date, setDate] = React.useState<Date | undefined>(undefined);
  
  return (
    <div className="w-full">
      {/* Breadcrumbs & Header */}
      <div className="py-4">
        <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-gray-900">
          Account Setting
        </h1>
      </div>

      {/* Main Split Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Side Content */}
        <div className="lg:col-span-6 space-y-6 flex flex-col ">
          {/* Section 1: Shipping Information */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-xs h-full">
            <div className="flex items-center gap-3 mb-6">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-xs font-bold text-white">
                1
              </span>
              <h2 className="text-lg font-bold text-gray-900">
                Personal Information
              </h2>
              <Badge className="ml-auto text-green-600 bg-green-100">
                verified
              </Badge>
            </div>
            <FieldGroup className="max-w-full">
              <Field>
                <FieldLabel htmlFor="inline-start-input">Input</FieldLabel>
                <InputGroup>
                  <InputGroupInput
                    id="inline-start-input"
                    placeholder="Search..."
                  />
                  <InputGroupAddon align="inline-start">
                    <SearchIcon className="text-muted-foreground" />
                  </InputGroupAddon>
                </InputGroup>
              </Field>

              <Field>
                <FieldLabel htmlFor="inline-start-input">Input</FieldLabel>
                <InputGroup>
                  <InputGroupInput type="email" placeholder="Enter your email" />
                  <InputGroupAddon>
                    <MailIcon />
                  </InputGroupAddon>
                </InputGroup>
              </Field>

              <Field>
                <FieldLabel htmlFor="inline-start-input">Input</FieldLabel>
                <InputGroup>
                  <InputGroupInput type="email" placeholder="Enter your email" />
                  <InputGroupAddon>
                    <PhoneIcon />
                  </InputGroupAddon>
                </InputGroup>
              </Field>

              <Field>
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
                    align="end"
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
              </Field>
                      
            </FieldGroup>
          </div>
        </div>

        {/* Right Side Content */}
        <div className="lg:col-span-6 space-y-6">
          {/* Section 1: Shipping Information */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-xs">
            <div className="flex items-center gap-3 mb-6">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-xs font-bold text-white">
                1
              </span>
              <h2 className="text-lg font-bold text-gray-900">
                Delivery Address
              </h2>
            </div>

            <div className="space-y-4">
              <Label
                htmlFor="firstName"
                className="text-xs font-semibold text-gray-700"
              >
                First name
              </Label>
              <Input id="firstName" defaultValue="Sokha" />
              <Label
                htmlFor="phone"
                className="text-xs font-semibold text-gray-700"
              >
                Phone number
              </Label>
              <Input id="phone" defaultValue="+855 12 345 678" />

              <div className="space-y-1.5">
                <Label
                  htmlFor="street"
                  className="text-xs font-semibold text-gray-700"
                >
                  Street address
                </Label>
                <Input id="street" placeholder="House number and street name" />
              </div>
            </div>
          </div>

          {/* Section 2: Payment Method */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-xs">
            <div className="flex items-center gap-3 mb-6">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-xs font-bold text-white">
                2
              </span>
              <h2 className="text-lg font-bold text-gray-900">
                Account Security
              </h2>
            </div>

            <div className="space-y-3">
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="payment"
                      className="h-4 w-4 accent-black cursor-pointer"
                    />
                    <span className="text-sm font-semibold text-gray-900">
                      Credit or debit card
                    </span>
                  </div>
                  <span className="text-xs text-gray-500">Bakong KHQR</span>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="payment"
                    className="h-4 w-4 accent-black cursor-pointer"
                  />
                  <span className="text-sm font-semibold text-gray-900">
                    Cash on delivery
                  </span>
                </div>
                <span className="text-xs text-gray-500">
                  Pay when it arrives
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountPage;
