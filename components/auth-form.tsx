import { Input } from './ui/input';
import { Label } from './ui/label';

export function AuthForm({
  action,
  children,
  defaultEmail = '',
  
}: {
  action: any;
  children: React.ReactNode;
  defaultEmail?: string;
}) {
  return (
    <form action={action} className="flex flex-col gap-4 px-4 sm:px-16">
      <div className="flex flex-col gap-2">
        <Label
          htmlFor="email"
          className="font-normal text-zinc-600 dark:text-zinc-400"
        >
          Email Address
        </Label>

        <Input
          id="email"
          name="email"
          type="email"
          placeholder="user@acme.com"
          autoComplete="email"
          required
          autoFocus
          defaultValue={defaultEmail}
          className="bg-muted text-md md:text-sm"
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label
          htmlFor="password"
          className="font-normal text-zinc-600 dark:text-zinc-400"
        >
          Password
        </Label>

        <Input
          id="password"
          name="password"
          type="password"
          required
          className="bg-muted text-md md:text-sm"
        />
      </div>

      {children}
    </form>
  );
}
