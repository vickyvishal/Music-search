# A Spotify Interface

## Overview

### The goal of the project was:
1. The app has three screen:
2. The first screen is a search page where you can search for an artist by name. There could be multiple artists that match the name, so make sure that you handle pagination where the user can see the results page by page.
3. Once you have found the artist you were searching for, click on the “View Albums” link will take you to an artist detail page where you will list (again, paginated) the albums of the artist.
4. Clicking on the View Tracks of an album listing will open up a modal that shows the album name, the release date and a list of tracks in the album and the duration of each track.

## Architecture
1. The code is writted using plain vanilla javaScript and jQuery
2. Spotify API is used
3. The search query are paginated.
4. Bootstrap is used for responsivness.
5. All API errors are handled gracefully
6. Code is indented properly. Jslint is used to properly format the code

## Viewing the page
1. Download XAMPP from this link [XAMPP for Windows10] (https://www.apachefriends.org/xampp-files/5.6.30/xampp-win32-5.6.30-0-VC11-installer.exe)
2. Once completed with instalation browse http://localhost/ this in your browser to access the XAMPP dashboard
3. You will see Apache web server and manage server
4. Select Apache web server and click start button
5. Look for htdocs folder in XAMPP directory
6. Download the zip file or clone it using git bash to htdocs folder
7. Open up a text editor and create a new php file called info.php. Place this file inside htdocs
8. Now load up http://localhost/info.php
