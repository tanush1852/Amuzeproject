Current music streaming platforms often fall short in delivering truly personalized recommendations, relying on algorithms that may not adequately capture individual preferences. This results in a less engaging and tailored music discovery experience, limiting the potential for users to explore new and exciting songs that align with their unique tastes.

To address this problem, our project aims to develop a web-based platform that utilizes an option-based interface, allowing users to indicate their musical preferences by creating a tracklist containing their personal favorites. The platform will not only recommend songs based on these preferences but also actively seek and incorporate user feedback, enhancing the overall user experience and providing a more tailored music recommendation service.

## AMUZE

To run the React App in development mode, run `npm i` followed by `npm start`.

To start the server, run `node server.js`.

- `Utils` folder contains the utility functions required for the ML algorithm.
- `Data` folder contains the dataset used for preprocessing and searching similar songs.
- `track_info.csv` contains the input tracks given by the user.
- `ratings.json` contains individual ratings of each user.
- `recom.js` contains the recommendations provided by the ML algorithm.
