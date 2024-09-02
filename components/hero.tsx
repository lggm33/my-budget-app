export default function Header() {
  return (
    <>
      <main className="container mx-auto px-4 py-10">

    <section className="mb-10">
      <h2 className="text-3xl font-semibold mb-4">What is My Budget App?</h2>
      <p className="text-lg">My Budget App is a web application that automatically tracks your expenses and income through email notifications. It provides tools for analyzing and visualizing your spending and income, along with setting reminders for credit card payments and more.</p>
    </section>


    <section className="mb-10">
      <h2 className="text-3xl font-semibold mb-4">Features</h2>
      <ul className="list-disc list-inside text-lg">
        <li>Automatic tracking of expenses and income via email notifications.</li>
        <li>Analysis and visualization tools for better financial management.</li>
        <li>Create reminders for credit card payments and other bills.</li>
        <li>Free one-month trial for new users.</li>
      </ul>
    </section>


    <section className=" p-6 rounded-lg text-center">
      <h3 className="text-2xl font-bold mb-4">Try My Budget App for Free!</h3>
      <p className="text-lg mb-6">Sign up today and enjoy a free one-month trial to explore all the features of My Budget App.</p>
      <a href="#" className="bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-700 transition duration-300">Get Started Now</a>
    </section>
  </main>


  <footer className="bg-gray-800 text-white py-6 mt-10">
    <div className="container mx-auto px-4 text-center">
      <p>&copy; 2024 My Budget App. All rights reserved.</p>
    </div>
  </footer>
    </>
  );
}
