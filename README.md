🔐 Password Generator (Vite + React)

A simple and customizable password generator built using React, Vite, and Tailwind CSS.
Users can select password length, allow numbers, allow special characters, and instantly copy the generated password with a single click.

🚀 Features

Generate random, secure passwords

Adjustable password length (6 to 50 characters)

Option to include:

Numbers

Special characters

Auto-update password whenever settings change

One-click copy to clipboard

Clean UI using Tailwind CSS

🛠️ Tech Stack

React

Vite

Tailwind CSS

JavaScript (ES6+)

📦 Installation & Setup
git clone https://github.com/kavyagrwl25/passwordGenerator.git
cd passwordGenerator
npm install
npm run dev



📁 Project Structure
src/
 ├── App.jsx        # Main password generator logic
 ├── index.css      # Tailwind styles
 └── main.jsx       # Entry point

🧠 How It Works

A base string contains all alphabets.

If Numbers is checked → digits are added.

If Characters is checked → special symbols are added.

On every change in length or toggles, a new password is generated using useEffect() and useCallback().



📤 Deployment

To build for production:

npm run build


To preview the build:

npm run preview


You can deploy easily on:

Vercel

Netlify

GitHub Pages

🙌 Contributions

Feel free to fork this repo and enhance the features like:

Strength indicator

Copy success toast

Dark/light themes

Save password history

📄 License

This project is open-source and available under the MIT License.
