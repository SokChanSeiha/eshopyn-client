import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function Signup() {
  return (
    <div className="w-full">
      <div className="mb-6 text-center">
        <h1 className="text-xl font-bold">CREATE AN ACCOUNT</h1>
        <p className="text-muted-foreground">
          Already have an account?
          <a href="#" className="pl-1 text-blue-600 text-sm hover:underline">
            Sign In
          </a>
        </p>
      </div>

        <form>
          <FieldGroup>
            <FieldSet>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="login-account-label">
                    Account Information
                  </FieldLabel>
                  <Input
                    id="login-account-input"
                    placeholder="Enter your username or email"
                    required
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="login-password-label">
                    Password
                  </FieldLabel>
                  <Input
                    id="login-password-input"
                    type="password"
                    placeholder="Enter your password"
                    required
                  />
                </Field>

                <a
                  href="#"
                  className="ml-auto text-blue-600 text-sm hover:underline"
                >
                  Forgot your password?
                </a>
                <Button type="submit" size="lg" className="w-full text-xl">
                  Submit
                </Button>
              </FieldGroup>
            </FieldSet>
          </FieldGroup>
        </form>
    </div>
  );
}

export default Signup;