import "./globals.css";


export const metadata = {
  title: " فرانت اند |  دالوندی",
  description: "برنامه نویس فرانت اند ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body
      dir="rtl"
      >
        {children}
      </body>
    </html>
  );
}
