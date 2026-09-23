import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function Login() {
  return (
    <div className="w-full max-w-md">
      <form>
        <FieldGroup>
          <FieldSet>
            <FieldDescription>FILL IN YOUR INFORMATION</FieldDescription>
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
              
                <a href="#" className="ml-auto text-blue-600 text-sm hover:underline">
                  Forgot your password?
                </a>
                <Button type="submit" size="lg" className="w-full text-xl">Submit</Button>
            </FieldGroup>
          </FieldSet>
        </FieldGroup>
      </form>
    </div>
  )
}

export default Login;