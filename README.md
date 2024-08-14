iTunes Search App
This project is a React-based web application that allows users to search for music, movies, and audiobooks using the iTunes API. The application fetches and displays search results in a paginated table, where users can view detailed information about each item and access media previews.

Features
Search Functionality: Users can search for media by entering keywords and selecting media types (e.g., Music, Movie, Audiobook).
Sorting and Pagination: Results are displayed in a sortable, paginated table.
Media Previews: Users can view video previews, audio tracks, and audiobook details.
Responsive Design: The application is responsive and works well on both desktop and mobile devices.
Project Structure
Pagina-busca.jsx: The main component handling the search, sorting, and pagination of iTunes results.
ReproductorAudio.jsx: A component to play audio tracks.
ReproductorAudiolib.jsx: A component to handle audiobook playback.
ReproductorVideo.jsx: A component to display and play video previews.
styles.css: Contains the styling for the application, ensuring a consistent and responsive user interface.
Installation
Clone the repository:

bash
Copiar código
git clone https://github.com/yourusername/itunes-search-app.git
cd itunes-search-app
Install dependencies:

bash
Copiar código
npm install
Start the development server:

bash
Copiar código
npm start
The application will be accessible at http://localhost:3000.

Usage
Search: Enter a keyword in the search bar and select the media type you wish to search for.
Sort: Click on the table headers to sort the results by artist name, release date, media type, or track name.
Pagination: Use the pagination buttons to navigate through the results.
View Details: Click on the "Más" button to view detailed information about a specific item, including media previews.
Dependencies
React: JavaScript library for building user interfaces.
React Bootstrap: For UI components like tables, buttons, and modals.
FontAwesome: For icons used in buttons and media type indicators.
License
This project is licensed under the MIT License.
