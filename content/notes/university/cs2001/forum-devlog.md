---
title:  "Forum DevLog"
tags:
  - university/cs2001
programming-languagues:
created: 2023-01-12
---
# Forum DevLog
---
## Achievements
---
- Initialised the project by creating the HTML and CSS pages.
    - Added support to smaller screens.
    - Started working on the navbar.
- Created a search bar, which is non-functional for now.
- Implemented the "Posts" page, which can be accessed from the navbar.
- Implemented  the front-end for the commenting and reply system.
    - Added the buttons and boxes necessary.

- Initialise Django.
    - Set up virtual environment.
    - Install packages.
- Added admin and a test user as well as a test post.
    - Started populating the database and now have a test Post.
        - User information, including uploaded picture.
        - Description of the post.
        - Title.
- Implemented a counter for post views.
    - Using the HitCount module the application now counts how many times a page was visited, based on the user's IP address.
- User can now add a comment and a reply
    - Through the admin panel we can now add comments to posts and replies. You can also link a comment to a reply and vice-versa.
- Merged previous working game.
    - I have managed to merge most of our previous work. The main, and big, issue is that I couldn't successfully (and easily) merge the registration system.
    - The game is there but it is not functional. It seems to some issue with the timer.
- Authentication system.
    - The user can now create an account. They then get redirected to an update profile page, where they can set their author name, profile picture and bio.
    - The user can only access the game and post when they are logged in.

## Front-End
---
### 06/12
1. Initial development of the forum
    Started by laying out the forum and offering support to smaller screens. Also started working on the navbar.
    
    The log in system seems tricky. I have duplicated the one used for the game with the main reason being the redirection. I am unsure on how to have multiple redirections.

2. Got it to retrieve username from database
    The forum now displays the username on the top of the screen.

3. Username now sticks to the right and added search bar
    Fixed the issue in the previous commit where I couldn't get the username to stick to the top right of the screen.
    
    I've also added a search bar which currently doesn't do anything.

### 07/12
4. Started to implement posts page
    I modified the navbar to have a section dedicated to the posts within the forum. The user can also go to the main page of the forum from the navbar.
    
    The posts page contains the posts within the forum.

5. Finished posts page
    Finished laying out the posts page and now working on an extra one which will add details to the forum.

6. Minor design fixes
    The grey in the index page was different then the one in the posts page. The "Forum - Stats" box was also weirdly positioned.
    
    I had to adjust the grey to a darker colour to take in account the yellow for the hyperlinks.

7. Finished front-end
    I am now going to dig in the backend, using Django.
    
    I have added a button to comment and a button to reply, however they are not functional. It is probably a good idea to rename the `detail.php` page.

## Back-End
---
8. Trying to use Django
    Here I am setting up Django, having to fix some minor issues with the paths, mainly for templates.
    
    Everything should be set up here but nothing substantial has been implemented.

9. Forum running under Django
    Fixed all paths and the website seems to be running, however navigation seems not to work.

10. Added admin and a test user as well as a test post
    Started populating the database and now have a test Post under `detail/the-forum-is-buggy/` where it correctly displays:
    
      - User information, including uploaded picture.
      - Description of the post.
      - Title.

11. Implemented a counter for post views
    Using the HitCount module the application now counts how many times a page was visited, based on the user's IP address.

12. User can now add a comment and a reply
    Through the admin panel we can now add comments to posts and replies. You can also link a comment to a reply and vice-versa.

13. Fine tuning the retrievals
    Mainly minor fixes for example retrieving the number of comments in a post and also making sure we can access all pages through the navigation bar at the top.

14. Merged previous working game
    I have managed to merge most of our previous work. The main, and big, issue is that I couldn't successfully (and easily) merge the registration system. I think it would have to re-done using Django.
    
    We could still use the same MySQL database, it seems easy to implement. However, I am unsure about the backend as PHP doesn't seem like a good approach.
    
    The game is there but it is not functional. It seems to some issue with the timer.

### 08/12
---
15. Authentication system
    The user can now create an account. They then get redirected to an update profile page, where they can set their author name, profile picture and bio. I am using the module `crispy_forms` and Django's own authentication system.

16. Profile pic gets uploaded (in update)
    User can **only** access the game if they are logged in.
    
    There was a bug where the updated profile pic wasn't being uploaded.

17. Finished registration
    All done with the registration system, allowing the user to change their details and logout.

    I noticed a **bug** where the tag and topic they choose is **not** getting sent to the database, so I have to re-select it when approving.