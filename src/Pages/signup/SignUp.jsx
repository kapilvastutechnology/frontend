import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


export function SignUp() {
  return (
    <div className="px-5 m-2" >
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Sign Up your account</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label id="firstname">First Name</Label>
              <Input
                id="firstname"
                type="firstname"
                required
              />
            </div>

            <div className="grid gap-2">
              <Label id="lastname">Last Name</Label>
              <Input
                id="lastname"
                type="lastname"
                required
              />

            </div>

            <div className="grid gap-2">
              <Label id="email">Email</Label>
              <Input
                id="email"
                type="email"
                required
              />
            </div>

             <div className="grid gap-2">
              <Label id="password">Password</Label>
              <Input
                id="password"
                type="password"
                required
              />
            </div>
          </div>
        </form>

      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          Sing Up
        </Button>
      </CardFooter>
    </Card>
    </div>
  )
}


