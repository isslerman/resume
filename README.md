# Awesome resume template made with Svelte

  
To learn the Svelte technology, I decided to undertake a personal project that would serve as my own online resume or curriculum. Through this project, I was able to put into practice the various concepts and techniques I had learned about Svelte, such as component architecture, reactive programming, and the use of external APIs.
I still need to update the template with a Lorem Ipsum ( or Bacon Ipsum ) text but here you can start with mine and change as  you wish. 
 

## Cloning and running the project

```bash
# clone the project in the current directory
gh repo clone isslerman/resume
cd resume
npm install
npm run dev  

# After running you can access in you local browser. Probably at: 
http://localhost:5173

```

## Changing the data

src/routes/+page.svelte - main content
src/componentes - svelte components
lib/images - images


## Static site generation
 

To create the static build, I used Svelte's built-in functionality to generate a production-ready version of the website. This involved optimizing the code, removing unnecessary dependencies, and minifying the CSS and JavaScript files.
https://kit.svelte.dev/docs/adapter-static

Once you had the static build, you can uploaded it to your personal server and configured it to serve the website. 

If you prefer you can deploy to Vercel, they have some free options too. More info here: https://vercel.com/solutions/svelte
  
```bash
npm run build
```

## More info about Svelte

* All documentation you need
https://svelte.dev/ -  
* Gallery of website made with Svelte
https://madewithsvelte.com
* Full Tutorial Great Course:
https://www.youtube.com/watch?v=zojEMeQGGHs&list=PL4cUxeGkcC9hlbrVO_2QFVqVPhlZmz7tO