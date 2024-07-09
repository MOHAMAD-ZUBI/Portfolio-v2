import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import Header from "@/components/main/Header";
import Transition from "@/components/ui/Transition";
import { cookies } from "next/headers";

const inter = Inter({ subsets: ["latin"] });

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-fira",
});

export const metadata = {
  title: "Mohamad Zubi - Full Stack Developer",
  description:
    "Mohamad Zubi - software engineer, full stack developer, and open-source contributor.",
};

const getCookies = async () => {
  const cookieStore = cookies();
  const theme = cookieStore.get("theme").value;
  return theme;
};

export default async function RootLayout({ children }) {
  const theme = await getCookies();
  console.log(theme);
  return (
    <html
      lang="en"
      className={`${firaCode.variable} ${theme == "dark" ? "dark" : ""}`}
    >
      <body
        className={`${inter.className} text-lightText bg-primaryLightBg dark:bg-primaryDarkBg dark:text-darkText`}
      >
        <Header />
        <Transition>{children}</Transition>
      </body>
    </html>
  );
}
