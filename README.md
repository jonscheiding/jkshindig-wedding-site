# Jon and Kaleigh's wedding website

<a href="https://travis-ci.org/jonscheiding/jk-wedding"><img src="https://travis-ci.org/jonscheiding/jk-wedding.svg?branch=master"></a>

This is the website for Jon and Kaleigh's wedding, currently hosted at https://jkshindig.com.

## Setup

1. Create a [Contentful](https://www.contentful.com) space to host the content for the site.
2. Install the Contentful CLI and log in.
    ```bash
    $ yarn add global contentful-cli
    $ contentful login
    ```
3. Import the Contentful content model to your space.
    ```bash
    $ contentful space use --space-id <space-id>
    $ contentful space import --content-file contentful/content-model.json
    ```
4. Create an access token for your Contentful space.
5. Create the `.env.local` file.  
    ```bash
    # If you want to enable Google Analytics
    REACT_APP_GA_TRACKING_ID=...

    REACT_APP_CONTENTFUL_SPACE_ID=...
    REACT_APP_CONTENTFUL_ACCESS_TOKEN=...
    ```
6. Start with Yarn.
    ```bash
    $ yarn
    $ yarn start
    ```

<br><br>

<img src="https://images.ctfassets.net/fo9twyrwpveg/44baP9Gtm8qE2Umm8CQwQk/c43325463d1cb5db2ef97fca0788ea55/PoweredByContentful_LightBackground.svg" height="50px">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<img src="https://www.netlify.com/img/press/logos/full-logo-light.svg" height="50px">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" height="50px">
