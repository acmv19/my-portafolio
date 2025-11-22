import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";

export const Home = () => {
  return (
    <div className=" bg-background text-foreground overflow-x-hidden">
      {/*theme toggle*/}
      <ThemeToggle />
      {/*background Effects*/}
      <StarBackground />

      {/*nav bar*/}

      {/*main content*/}

      {/*footer*/}
    </div>
  );
};
