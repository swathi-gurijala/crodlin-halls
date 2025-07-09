export const metadata = {
  title: "Crodlin Halls",
  description: "Book premium halls for events like weddings, birthdays, and corporate meetings.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800">
        {children}
      </body>
    </html>
  );
}
